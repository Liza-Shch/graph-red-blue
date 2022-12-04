import React from 'react';

import styles from './Label.module.css';

export enum LabelMode {
    success = 'success',
    negative = 'negaive',
    error = 'error',
}

interface LabelProps {
    text: string;
    mode: LabelMode;
}

export const Label: React.FC<LabelProps> = ({ text, mode }) => {
    return (
        <div className={styles.wrapper}>
            {text}
        </div>
    );
};
