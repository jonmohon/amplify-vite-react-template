import { useAuthenticator } from '@aws-amplify/ui-react';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

function App() {
  const { user, signOut } = useAuthenticator();

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', backgroundColor: theme.palette.background.default }}>
        <Sidebar /> {/* Sidebar on the left */}
        <main style={{ padding: '20px', flex: 1 }}>
          <h1>Welcome, {user?.username}!</h1>
          <button onClick={signOut}>Sign Out</button>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
