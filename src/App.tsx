import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Import page components
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Campaigns from './pages/Campaigns';
import Email from './pages/Email';
import Leads from './pages/Leads';
import Reporting from './pages/Reporting';
import Settings from './pages/Settings';
import Sms from './pages/Sms';
import Sidebar from './components/Sidebar';

Amplify.configure(outputs);

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B2430',
    },
  },
});

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, authStatus } = useAuthenticator((context) => [context.user, context.authStatus]);
  
  if (authStatus !== 'authenticated') {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Authenticator>
        {({ signOut }) => (
          <Router>
            <div style={{ display: 'flex' }}>
              <Sidebar onSignOut={signOut} />
              <main style={{ flexGrow: 1, padding: '20px' }}>
                <Routes>
                  <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                  <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
                  <Route path="/campaigns" element={<ProtectedRoute><Campaigns /></ProtectedRoute>} />
                  <Route path="/email" element={<ProtectedRoute><Email /></ProtectedRoute>} />
                  <Route path="/leads" element={<ProtectedRoute><Leads /></ProtectedRoute>} />
                  <Route path="/reporting" element={<ProtectedRoute><Reporting /></ProtectedRoute>} />
                  <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
                  <Route path="/sms" element={<ProtectedRoute><Sms /></ProtectedRoute>} />
                </Routes>
              </main>
            </div>
          </Router>
        )}
      </Authenticator>
    </ThemeProvider>
  );
}

export default App;