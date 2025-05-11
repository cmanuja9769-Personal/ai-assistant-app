export enum Step {
    Search,
    Consolidate,
    Response,
}

export const mockApiResponse = {
    search: {
        title: 'Identify use cases designed to check policy compliance with market regulations',
        query: 'policy compliance with market regulations',
        sources: ['PMI Marketplace', 'ideaxyz.com', 'abxyz.com'],
    },
    consolidate: {
        title: 'Consolidate findings',
        status: 'Summarising Findings...', // Or "Consolidate findings" when not actively typing
    },
    response: {
        title: 'Building a Use Case for Policy Compliance Check',
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            },
            {
                title: 'Consectetur adipiscing elit',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            },
        ],
    },
};

// Basic types for now, can be expanded
export interface SearchData {
    title: string;
    query: string;
    sources: string[];
}

export interface ConsolidateData {
    title: string;
    status: string;
}

export interface ResponseData {
    title: string;
    steps: { title: string; content: string }[];
} 