import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
            <div className="text-primary font-semibold text-lg">XX Project name</div>
            <div className="flex items-center">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                    JD
                </div>
                <span className="ml-2 text-sm text-text-secondary">John D</span>
            </div>
        </header>
    );
};

export default Header; 