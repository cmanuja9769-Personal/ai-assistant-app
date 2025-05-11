import React, { createContext, useState, ReactNode } from 'react';
import { SearchData, ConsolidateData, ResponseData, Step } from '../utils/processingSteps';

interface QueryContextType {
    currentQuery: string | null;
    setCurrentQuery: (query: string | null) => void;
    processingStatus: Step;
    setProcessingStatus: (status: Step) => void;
    searchResults: SearchData | null;
    setSearchResults: (results: SearchData | null) => void;
    consolidationResults: ConsolidateData | null;
    setConsolidationResults: (results: ConsolidateData | null) => void;
    responseResults: ResponseData | null;
    setResponseResults: (results: ResponseData | null) => void;
}

export const QueryContext = createContext<QueryContextType | undefined>(undefined);

interface QueryProviderProps {
    children: ReactNode;
}

const QueryProvider: React.FC<QueryProviderProps> = ({ children }: QueryProviderProps) => {
    const [currentQuery, setCurrentQuery] = useState<string | null>(null);
    const [processingStatus, setProcessingStatus] = useState<Step>(Step.Search);
    const [searchResults, setSearchResults] = useState<SearchData | null>(null);
    const [consolidationResults, setConsolidationResults] = useState<ConsolidateData | null>(null);
    const [responseResults, setResponseResults] = useState<ResponseData | null>(null);

    return (
        <QueryContext.Provider
            value={{
                currentQuery, setCurrentQuery,
                processingStatus, setProcessingStatus,
                searchResults, setSearchResults,
                consolidationResults, setConsolidationResults,
                responseResults, setResponseResults
            }}
        >
            {children}
        </QueryContext.Provider>
    );
};

export default QueryProvider;