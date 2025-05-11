// Central type definitions for the application

export interface User {
    id: string;
    name: string;
    initials: string;
}

export interface Query {
    id: string;
    text: string;
    timestamp: Date;
}

// Add more types as the application grows
// e.g., types for API responses, specific component props not defined inline

// Re-exporting types from processingSteps for easier access if needed elsewhere
export * from '../utils/processingSteps'; 