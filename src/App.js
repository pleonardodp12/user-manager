import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Routes from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
      
    </>
  );
}

export default App;
