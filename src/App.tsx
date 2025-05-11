import React from 'react';
import MainLayout from './components/layout/MainLayout';
import QueryProvider from './context/QueryContext';
import AppProvider from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <QueryProvider>
        <MainLayout />
      </QueryProvider>
    </AppProvider>
  );
}

export default App;
