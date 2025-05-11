import React from 'react';

interface SuggestedQueriesProps {
    onQuerySelect: (query: string) => void;
}

const suggestions = [
    'I need help brainstorming ideas for a new product. How can I start?',
    'I need help brainstorming ideas for a new product. How can I start?',
    'I need help brainstorming ideas for a new product. How can I start?',
];

const SuggestedQueries: React.FC<SuggestedQueriesProps> = ({ onQuerySelect }: SuggestedQueriesProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full max-w-2xl">
            {suggestions.map((suggestion, index) => (
                <button
                    key={index}
                    onClick={() => onQuerySelect(suggestion)}
                    className="bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-sm p-4 rounded-lg text-left h-full transition-colors shadow-sm hover:shadow-md"
                >
                    {suggestion}
                </button>
            ))}
        </div>
    );
};

export default SuggestedQueries; 