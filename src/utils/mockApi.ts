import { mockApiResponse, SearchData, ConsolidateData, ResponseData, Step } from './processingSteps';

// Simulate API call delays
const SIMULATED_DELAY = 1000; // 1 second

export const fetchSearchData = (query: string): Promise<SearchData> => {
    console.log(`API: Searching for "${query}"...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockApiResponse.search);
        }, SIMULATED_DELAY);
    });
};

export const fetchConsolidateData = (): Promise<ConsolidateData> => {
    console.log('API: Consolidating findings...');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockApiResponse.consolidate);
        }, SIMULATED_DELAY);
    });
};

export const fetchResponseData = (): Promise<ResponseData> => {
    console.log('API: Generating response...');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockApiResponse.response);
        }, SIMULATED_DELAY);
    });
};

// Example of a function that might process the entire query flow
export const processFullQuery = async (
    query: string,
    onStepUpdate: (step: Step, data: any) => void
) => {
    const searchResults = await fetchSearchData(query);
    onStepUpdate(Step.Search, searchResults);

    const consolidateResults = await fetchConsolidateData();
    onStepUpdate(Step.Consolidate, consolidateResults);

    const responseResults = await fetchResponseData();
    onStepUpdate(Step.Response, responseResults);

    return {
        search: searchResults,
        consolidate: consolidateResults,
        response: responseResults,
    };
}; 