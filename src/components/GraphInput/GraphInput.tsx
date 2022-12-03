import React from 'react';
import { getGraph } from '../../models/graph';
import Button from '../../ui/Button';
import Textarea from '../../ui/Textarea';

import styles from './GraphInput.module.css';

export const GraphInput: React.FC<{}> = () => {
    const ref = React.useRef<HTMLTextAreaElement>(null);

    const onGraphInput = React.useCallback(() => {
        const input = ref?.current?.value;
        if (!input) {
            return;
        }

        const graph = getGraph(input);
        console.log(graph);
    }, [ref]);

    return (
        <div className={styles.wrapper}>
            <Textarea placeholder="Enter a graph" ref={ref} />
            <Button text="Check" onClick={onGraphInput} />
        </div>
    );
};
