import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { CircularProgress } from '@mui/material';

interface SearchStepProps {
    isActive: boolean;
    isCompleted: boolean;
    data: {
        title: string;
        query: string;
        sources: string[];
    };
    isLoading: boolean;
    stepNumber: number;
}

const SearchStep: React.FC<SearchStepProps> = ({ isActive, isCompleted, data, isLoading, stepNumber }: SearchStepProps) => {
    const [isExpanded, setIsExpanded] = React.useState(true);

    const renderStepIcon = () => {
        if (isCompleted) {
            return <CheckCircleIcon className="text-accent mr-3" />;
        }
        if (isActive && isLoading) {
            return <CircularProgress size={24} className="text-primary mr-3" sx={{ padding: '2px' }} />;
        }
        if (isActive && !isLoading) {
            return (
                <div className="w-6 h-6 bg-primary text-white rounded-full mr-3 flex items-center justify-center">
                    <span className="text-xs font-semibold">{stepNumber}</span>
                </div>
            );
        }
        // Pending state
        return (
            <div className="w-6 h-6 border-2 border-gray-300 text-gray-400 rounded-full mr-3 flex items-center justify-center">
                <span className="text-xs font-semibold">{stepNumber}</span>
            </div>
        );
    };

    return (
        <div className="mb-3 border-b border-border-color pb-3">
            <div
                className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded-md"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center">
                    {renderStepIcon()}
                    <h3 className={`text-md font-semibold ${isCompleted ? 'text-text-secondary line-through' : isActive ? 'text-text-primary' : 'text-gray-400'}`}>
                        {data.title}
                    </h3>
                </div>
                {isExpanded ? <ExpandLessIcon className="text-text-secondary" /> : <ExpandMoreIcon className="text-text-secondary" />}
            </div>

            {isExpanded && (
                <div className="pl-[3.25rem] mt-2 text-sm">
                    <p className="text-text-secondary mb-1 italic">Searching</p>
                    <div className="bg-gray-100 p-2 rounded text-text-secondary mb-2 text-xs">
                        <span className="font-semibold text-primary">φ</span> {data.query}
                    </div>
                    <p className="text-text-secondary mb-1 italic">Reading...</p>
                    <div className="flex flex-wrap gap-1">
                        {data.sources.map((source, index) => (
                            <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                {source}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchStep; 