import { useAuthenticator } from '@aws-amplify/ui-react';
import Sidebar from './components/Sidebar';
import { CssBaseline, Box } from '@mui/material';

function App() {
  const { user, signOut } = useAuthenticator();

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#f0f2f5' }}> {/* Light background color */}
      <CssBaseline />
      <Sidebar /> {/* Sidebar on the left */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#ffffff', minHeight: '100vh' }}> {/* Main area */}
        <h1>Welcome, {user?.username}!</h1>
        <button onClick={signOut}>Sign Out</button>
      </Box>
    </Box>
  );
}

export default App;
