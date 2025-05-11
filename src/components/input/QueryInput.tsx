import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile'; // As per the image

interface QueryInputProps {
    onSubmit: (query: string) => void;
}

const QueryInput: React.FC<QueryInputProps> = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSubmit(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full bg-white p-3 rounded-lg shadow-md flex items-center">
            <button type="button" className="p-2 text-text-secondary hover:text-primary">
                <AttachFileIcon />
            </button>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="I want to create a use case to fact check if our internal policies are compliant with market regulations"
                className="flex-grow p-2 text-sm text-text-primary focus:outline-none"
            />
            <button
                type="submit"
                className={`p-2 rounded-md ${inputValue.trim() ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'} transition-colors ml-2`}
                disabled={!inputValue.trim()}
            >
                <SendIcon fontSize="small" />
            </button>
        </form>
    );
};

export default QueryInput; 