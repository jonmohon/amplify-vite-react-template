// src/App.tsx
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import Sidebar from './components/Sidebar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Campaigns from './pages/Campaigns';
import Email from './pages/Email';
import SMS from './pages/Sms';
import Analytics from './pages/Analytics';
import Reporting from './pages/Reporting';
import Settings from './pages/Settings';
import { useAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const { route } = useAuthenticator((context) => [context.route]);
  const navigate = useNavigate();
  const [initialLogin, setInitialLogin] = useState(true);

  useEffect(() => {
    if (route === 'authenticated' && initialLogin) {
      setInitialLogin(false); // Set to false after the first redirect
      navigate('/dashboard'); // Redirect to /dashboard on initial login
    }
  }, [route, initialLogin, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flexGrow: 1, padding: '20px', backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/email" element={<Email />} />
            <Route path="/sms" element={<SMS />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
