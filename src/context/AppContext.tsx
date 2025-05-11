import React, { createContext, useState, ReactNode } from 'react';

interface AppContextType {
    // Example: theme, user preferences, etc.
    appName: string;
    setAppName: (name: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }: AppProviderProps) => {
    const [appName, setAppName] = useState('AI Assistant');

    return (
        <AppContext.Provider value={{ appName, setAppName }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider; 