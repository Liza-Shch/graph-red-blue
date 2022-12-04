import React from 'react';

import styles from './Button.module.css';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
    <div className={styles.wrapper} onClick={onClick}>
        {text}
    </div>
);
