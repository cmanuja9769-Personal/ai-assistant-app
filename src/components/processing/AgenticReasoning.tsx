import React, { useState, useEffect } from 'react';
import SearchStep from './SearchStep';
import ConsolidateStep from './ConsolidateStep';
import ResponseStep from './ResponseStep';
import EditIcon from '@mui/icons-material/Edit';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { Step, mockApiResponse } from '../../utils/processingSteps'; // Mock data

interface AgenticReasoningProps {
    query: string;
}

const AgenticReasoning: React.FC<AgenticReasoningProps> = ({ query }) => {
    const [currentStep, setCurrentStep] = useState<Step>(Step.Search);
    const [searchData, setSearchData] = useState<any>(null); // Define more specific types later
    const [consolidateData, setConsolidateData] = useState<any>(null);
    const [responseData, setResponseData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const processQuery = async () => {
            setIsLoading(true);
            // Simulate API call for search
            setSearchData(mockApiResponse.search);
            setCurrentStep(Step.Search);
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay

            // Simulate API call for consolidate
            setConsolidateData(mockApiResponse.consolidate);
            setCurrentStep(Step.Consolidate);
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Simulate API call for response
            setResponseData(mockApiResponse.response);
            setCurrentStep(Step.Response);
            setIsLoading(false);
        };

        if (query) {
            processQuery();
        }
    }, [query]);

    const handleEditQuery = () => {
        // For simplicity, we refresh the page. A more complex app might reset state.
        window.location.reload();
    };

    return (
        <div className="w-full bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4 p-4 border border-border-color rounded-md bg-gray-50">
                <p className="text-sm text-text-primary">{query}</p>
                <button onClick={handleEditQuery} className="text-xs text-primary hover:text-blue-800 mt-1 flex items-center">
                    <EditIcon fontSize="small" sx={{ mr: 0.5, fontSize: '1rem' }} /> Edit
                </button>
            </div>

            <h2 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                <AutoAwesomeOutlinedIcon className="text-primary mr-2" fontSize="medium" />
                Agentic Reasoning
            </h2>

            {currentStep >= Step.Search && searchData && (
                <SearchStep
                    isActive={currentStep === Step.Search}
                    isCompleted={currentStep > Step.Search}
                    data={searchData}
                    isLoading={currentStep === Step.Search && isLoading}
                    stepNumber={1}
                />
            )}
            {currentStep >= Step.Consolidate && consolidateData && (
                <ConsolidateStep
                    isActive={currentStep === Step.Consolidate}
                    isCompleted={currentStep > Step.Consolidate}
                    data={consolidateData}
                    isLoading={currentStep === Step.Consolidate && isLoading}
                    stepNumber={2}
                />
            )}
            {currentStep === Step.Response && responseData && (
                <ResponseStep data={responseData} />
            )}
        </div>
    );
};

export default AgenticReasoning; 