import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const { user, signOut } = useAuthenticator();

  return (
    <main>
      <h1>Welcome, {user?.username}!</h1>
      <p>Email: {user?.attributes?.email}</p>
      <button onClick={signOut}>Sign Out</button>
    </main>
  );
}

export default App;
