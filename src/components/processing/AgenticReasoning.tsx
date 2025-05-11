import React, { useState, useEffect } from 'react';
import SearchStep from './SearchStep';
import ConsolidateStep from './ConsolidateStep';
import ResponseStep from './ResponseStep';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { Step, mockApiResponse } from '../../utils/processingSteps';

interface AgenticReasoningProps {
    query: string;
}

const AgenticReasoning: React.FC<AgenticReasoningProps> = ({ query }) => {
    const [currentStep, setCurrentStep] = useState<Step>(Step.Search);
    const [searchData, setSearchData] = useState<any>(null);
    const [consolidateData, setConsolidateData] = useState<any>(null);
    const [responseData, setResponseData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const processQuery = async () => {
            setIsLoading(true);
            setSearchData(mockApiResponse.search);
            setCurrentStep(Step.Search);
            await new Promise(resolve => setTimeout(resolve, 1500));

            setConsolidateData(mockApiResponse.consolidate);
            setCurrentStep(Step.Consolidate);
            await new Promise(resolve => setTimeout(resolve, 1500));

            setResponseData(mockApiResponse.response);
            setCurrentStep(Step.Response);
            setIsLoading(false);
        };

        if (query) {
            processQuery();
        }
    }, [query]);

    return (
        <div className="w-full">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4 w-full">
                <p className="text-gray-700 text-sm">{query}</p>
                <button className="text-gray-500 hover:text-gray-700 text-sm mt-2 underline">
                    Edit
                </button>
            </div>

            <div className="relative">
                <div className="absolute -left-4 -top-2 z-10 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center border-2 border-white shadow-sm">
                    <AutoAwesomeOutlinedIcon className="text-emerald-600 w-5 h-5" />
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pl-8">
                    <h2 className="text-lg font-medium text-gray-900 mb-6">Agentic Reasoning</h2>

                    <div className="space-y-0 relative">
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
                </div>
            </div>
        </div>
    );
};

export default AgenticReasoning;