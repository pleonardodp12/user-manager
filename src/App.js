import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { AuthProvider } from './contexts/AuthContext';
import Routes from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <ToastProvider>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
      
    </ToastProvider>
  );
}

export default App;
