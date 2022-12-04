import React from 'react';

import styles from './Textarea.module.css';

interface TextareaProps {
    placeholder?: string;
    value?: string;
    onChange?: React.ChangeEventHandler;
}

export const Textarea = React.forwardRef(({ placeholder, value, onChange }: TextareaProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => (
    <textarea
        placeholder={placeholder}
        className={styles.wrapper}
        ref={ref}
        value={value}
        onChange={onChange}
    />
));
