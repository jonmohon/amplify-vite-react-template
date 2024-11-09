// src/App.tsx
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import theme from './theme/theme';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Campaigns from './pages/Campaigns';
import Email from './pages/Email';
import SMS from './pages/Sms';
import Analytics from './pages/Analytics';
import Reporting from './pages/Reporting';
import Settings from './pages/Settings';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ padding: '20px', flex: 1, backgroundColor: '#f4f6f8' }}>
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
