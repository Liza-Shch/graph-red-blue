import React from 'react';

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
        <div>
            {text}
        </div>
    );
};
