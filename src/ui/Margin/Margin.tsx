import React from 'react';

interface MarginProps {
    x: number;
}

export const Margin: React.FC<MarginProps> = ({ x }) => (
    <div style={{ height: `${x}px`}}/>
);
