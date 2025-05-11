import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white py-3 px-4 flex justify-between items-center border-b border-gray-200">
            <div className="flex items-center">
                <div className="user-avatar mr-2">
                    XX
                </div>
                <span className="text-gray-900 text-sm font-medium">Project name</span>
            </div>
            <div className="flex items-center">
                <div className="user-avatar">
                    XX
                </div>
                <span className="ml-2 text-gray-900 text-sm">John D</span>
                <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </header>
    );
};

export default Header;