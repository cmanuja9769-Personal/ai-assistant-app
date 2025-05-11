import React from 'react';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'; // For PDF
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'; // For Web

interface Source {
    name: string;
    type: 'pdf' | 'web';
    path: string; // URL or path to the source
}

interface SourcesSidebarProps {
    sources: Source[];
}

const SourcesSidebar: React.FC<SourcesSidebarProps> = ({ sources }) => {
    return (
        <div className="bg-white p-4 rounded-lg h-full">
            <h2 className="text-lg font-semibold text-text-primary mb-4">Sources</h2>
            <ul className="space-y-3">
                {sources.map((source, index) => (
                    <li key={index} className="flex items-center">
                        {source.type === 'pdf' ? (
                            <ArticleOutlinedIcon className="text-text-secondary mr-2" />
                        ) : (
                            <LanguageOutlinedIcon className="text-text-secondary mr-2" />
                        )}
                        <a
                            href={source.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline truncate"
                            title={source.name}
                        >
                            {source.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SourcesSidebar; 