import React, { useState, useEffect } from 'react';

interface TypingIndicatorProps {
    text: string;
    speed?: number;
}

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ text, speed = 50 }: TypingIndicatorProps) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        setDisplayedText(''); // Reset when text or speed changes
        if (text) {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    setDisplayedText((prev: string) => prev + text.charAt(i));
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, speed);
            return () => clearInterval(typingInterval);
        }
    }, [text, speed]);

    return <p className="text-text-secondary italic">{displayedText}</p>;
};

export default TypingIndicator; 