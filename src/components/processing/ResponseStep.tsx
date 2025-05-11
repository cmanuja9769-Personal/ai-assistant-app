import React from 'react';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';

interface ResponseStepProps {
    data: {
        title: string;
        steps: { title: string; content: string }[];
    };
}

const ResponseStep: React.FC<ResponseStepProps> = ({ data }: ResponseStepProps) => {
    return (
        <div className="mt-4">
            {/* <h3 className="text-md font-semibold text-gray-800 mb-3">{data.title}</h3> */}
            {/* Title seems to be part of the AgenticReasoning block based on image, not repeated here */}

            <div className="space-y-4 text-sm text-text-secondary">
                {data.steps.map((step: { title: string; content: string }, index: number) => (
                    <div key={index}>
                        <h4 className="font-semibold text-text-primary mb-1">Step {index + 1}: {step.title}</h4>
                        <p className="leading-relaxed">{step.content}</p>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex items-center space-x-3">
                <button className="p-1 text-text-secondary hover:text-primary">
                    <ThumbUpAltOutlinedIcon fontSize="small" />
                </button>
                <button className="p-1 text-text-secondary hover:text-primary">
                    <ThumbDownAltOutlinedIcon fontSize="small" />
                </button>
                <button className="p-1 text-text-secondary hover:text-primary">
                    <RefreshOutlinedIcon fontSize="small" />
                </button>
            </div>
        </div>
    );
};

export default ResponseStep; 