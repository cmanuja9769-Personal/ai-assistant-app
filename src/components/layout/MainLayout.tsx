import React, { useState } from 'react';
import Header from '../common/Header';
import QueryInput from '../input/QueryInput';
import SuggestedQueries from '../input/SuggestedQueries';
import AgenticReasoning from '../processing/AgenticReasoning';
import SourcesSidebar from './SourcesSidebar'; // Will be created and uncommented

const MainLayout: React.FC = () => {
    const [showProcessing, setShowProcessing] = useState(false);
    const [query, setQuery] = useState('');
    // Mock sources for now, ideally this would come from context or API response
    const mockSources = [
        { name: 'Test file.pdf', type: 'pdf' as const, path: '#' },
        { name: 'Policy update.pdf', type: 'pdf' as const, path: '#' },
        { name: 'www.abcpolicy.com', type: 'web' as const, path: '#' },
    ];

    const handleQuerySubmit = (submittedQuery: string) => {
        setQuery(submittedQuery);
        setShowProcessing(true);
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow flex container mx-auto px-4 py-8 max-w-7xl">
                {showProcessing && (
                    <div className="w-1/4 pr-8">
                        <SourcesSidebar sources={mockSources} />
                    </div>
                )}
                <div className={`flex-grow flex flex-col items-center ${showProcessing ? 'w-3/4' : 'w-full max-w-2xl'}`}>
                    {!showProcessing ? (
                        <>
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-semibold text-text-primary">Welcome, John</h1>
                                <p className="text-text-secondary mt-2">How can I help you today?</p>
                            </div>
                            <button
                                className="text-sm text-primary hover:text-blue-800 mb-6"
                                onClick={() => console.log('Try Asking clicked')}
                            >
                                Try Asking
                            </button>
                            <SuggestedQueries onQuerySelect={handleQuerySubmit} />
                            <QueryInput onSubmit={handleQuerySubmit} />
                        </>
                    ) : (
                        <AgenticReasoning query={query} />
                    )}
                </div>
            </main>
        </div>
    );
};

export default MainLayout; 