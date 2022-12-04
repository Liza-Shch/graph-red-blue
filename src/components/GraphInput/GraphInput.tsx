import React from 'react';
import { checkGraphIsTwoColor, getGraph } from '../../models/graph';
import Button from '../../ui/Button';
import Label, { LabelMode } from '../../ui/Label';
import Margin from '../../ui/Margin';
import Textarea from '../../ui/Textarea';

import styles from './GraphInput.module.css';

const labelTexts = {
    [LabelMode.success]: 'Yes!',
    [LabelMode.negative]: 'No!',
    [LabelMode.error]: 'Wrong graph format!',
}

export const GraphInput: React.FC<{}> = () => {
    const ref = React.useRef<HTMLTextAreaElement>(null);
    const [error, setError] = React.useState(false);
    const [isTwoColor, setIsTwoColor] = React.useState<boolean | null>(null);

    const onGraphInput = React.useCallback(() => {
        const input = ref?.current?.value;
        if (!input) {
            return;
        }

        const graph = getGraph(input);
        if (!graph) {
            setError(true);
            return;
        }

        const isTwoColorGraph = checkGraphIsTwoColor(graph);
        setIsTwoColor(isTwoColorGraph);
    }, [ref]);

    const onGraphChange = React.useCallback(() => {
        if (isTwoColor !== null) {
            setIsTwoColor(null);
        }
        
        if (error) {
            setError(false);
        }
    }, [isTwoColor, error]);

    const labelMode = React.useMemo(() => {
        if (error) {
            return LabelMode.error;
        }

        return isTwoColor ? LabelMode.success : LabelMode.negative;
    }, [error, isTwoColor]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.textarea}>
               <Textarea placeholder="Enter a graph" ref={ref} onChange={onGraphChange} /> 
            </div>
            <Margin x={20} />
            <Button text="Check" onClick={onGraphInput} />
            {(isTwoColor !== null || error) && (
                <>
                    <Margin x={40} />
                    <Label
                        text={labelTexts[labelMode]}
                        mode={labelMode}
                    />
                </>
            )}
        </div>
    );
};
