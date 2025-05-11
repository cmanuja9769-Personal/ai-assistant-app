import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { CircularProgress } from '@mui/material';
import TypingIndicator from '../common/TypingIndicator'; // Will be created

interface ConsolidateStepProps {
    isActive: boolean;
    isCompleted: boolean;
    data: {
        title: string;
        status: string; // e.g., "Consolidate findings", "Summarising Findings..."
    };
    isLoading: boolean;
    stepNumber: number;
}

const ConsolidateStep: React.FC<ConsolidateStepProps> = ({ isActive, isCompleted, data, isLoading, stepNumber }: ConsolidateStepProps) => {
    const [isExpanded, setIsExpanded] = React.useState(true);

    const renderStepIcon = () => {
        if (isCompleted) {
            return <CheckCircleIcon className="text-accent mr-3" />;
        }
        if (isActive && isLoading) {
            return <CircularProgress size={24} className="text-primary mr-3" sx={{ padding: '2px' }} />;
        }
        if (isActive && !isLoading) { // Should ideally not happen for consolidate if it moves to response after loading
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
                    {(isActive && isLoading) || (isCompleted && data.status.includes('Summaris')) ? (
                        <TypingIndicator text={data.status} />
                    ) : (
                        <p className="text-text-secondary">{data.status}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ConsolidateStep; 