// src/App.tsx
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ padding: '20px', flex: 1, backgroundColor: '#f4f6f8' }}>
          <h1>Welcome to MyApp</h1>
          {/* Main content goes here */}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
