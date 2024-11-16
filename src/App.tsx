import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json'; // Adjust the path as necessary
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
import Sidebar from './components/Sidebar'; // Import the Sidebar component

Amplify.configure(outputs);

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B2430',
    },
  },
});

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Authenticator>
      {({ user }) => (
        <ThemeProvider theme={theme}>
          <Router>
            <div className="App" style={{ display: 'flex' }}>
              <Sidebar /> {/* Add the Sidebar component here */}
              <div style={{ flexGrow: 1 }}>
                <header>
                  <h1>Hello {user?.username}</h1>
                  {/* Sign-out button removed */}
                </header>
                <Routes>
                  {/* Protected Routes */}
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/analytics"
                    element={
                      <ProtectedRoute>
                        <Analytics />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/campaigns"
                    element={
                      <ProtectedRoute>
                        <Campaigns />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/email"
                    element={
                      <ProtectedRoute>
                        <Email />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/leads"
                    element={
                      <ProtectedRoute>
                        <Leads />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/reporting"
                    element={
                      <ProtectedRoute>
                        <Reporting />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/settings"
                    element={
                      <ProtectedRoute>
                        <Settings />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/sms"
                    element={
                      <ProtectedRoute>
                        <Sms />
                      </ProtectedRoute>
                    }
                  />

                  {/* Default Redirect for authenticated users */}
                  <Route
                    path="*"
                    element={
                      <Navigate to="/dashboard" replace />
                    }
                  />
                </Routes>
              </div>
            </div>
          </Router>
        </ThemeProvider>
      )}
    </Authenticator>
  );
};

export default App;
