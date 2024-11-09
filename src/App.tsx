import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Sidebar from './components/Sidebar';

function App() {
  const { user, signOut } = useAuthenticator();

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar /> {/* Sidebar on the left */}
      <main style={{ padding: '20px', flex: 1 }}>
        <h1>Welcome, {user?.username}!</h1>
        <p>Email: {user?.attributes?.email}</p>
        <button onClick={signOut}>Sign Out</button>
      </main>
    </div>
  );
}

export default App;
