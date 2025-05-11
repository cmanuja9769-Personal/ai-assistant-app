import React, { useState } from 'react';
import Header from '../common/Header';
import QueryInput from '../input/QueryInput';
import SuggestedQueries from '../input/SuggestedQueries';
import AgenticReasoning from '../processing/AgenticReasoning';
import SourcesSidebar from './SourcesSidebar';

const MainLayout: React.FC = () => {
    const [showProcessing, setShowProcessing] = useState(false);
    const [query, setQuery] = useState('');
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
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <div className="w-full bg-white border-b border-gray-200 px-4">
                {showProcessing && (
                    <div className="max-w-7xl mx-auto py-4">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 w-full">
                            <p className="text-gray-700 text-sm">{query}</p>
                            <button 
                                onClick={() => window.location.reload()} 
                                className="text-gray-500 hover:text-gray-700 text-sm mt-2 underline"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <main className="flex-grow flex flex-col lg:flex-row container mx-auto px-4 md:px-8 py-8 max-w-7xl gap-8">
                {showProcessing && (
                    <div className="w-full lg:w-1/4 order-2 lg:order-1">
                        <SourcesSidebar sources={mockSources} />
                    </div>
                )}
                <div className={`flex-grow flex flex-col items-center order-1 lg:order-2 ${showProcessing ? 'w-full lg:w-3/4' : 'w-full max-w-2xl mx-auto'}`}>
                    {!showProcessing ? (
                        <>
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-semibold text-gray-900">Welcome, John</h1>
                                <p className="text-gray-600 mt-2">How can I help you today?</p>
                            </div>
                            <button
                                className="text-sm text-blue-600 hover:text-blue-800 mb-6 font-medium"
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