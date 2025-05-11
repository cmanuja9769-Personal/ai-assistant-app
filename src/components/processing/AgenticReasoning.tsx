import React, { useState, useEffect } from 'react';
import SearchStep from './SearchStep';
import ConsolidateStep from './ConsolidateStep';
import ResponseStep from './ResponseStep';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
    const [isExpanded, setIsExpanded] = useState(true);

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
        <div className="w-full relative">
            <div className="absolute -left-12 -top-2 z-20">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <AutoAwesomeOutlinedIcon className="text-emerald-600 w-5 h-5" />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-medium text-gray-900">Agentic Reasoning</h2>
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </button>
                </div>

                {isExpanded && (
                    <div className="space-y-6">
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
                )}
            </div>
        </div>
    );
};

export default AgenticReasoning;