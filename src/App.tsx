import { useAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const { signOut } = useAuthenticator();

  return (
    <main>
      {/* Other components */}
      <button onClick={signOut}>Sign out test2</button>
    </main>
  );
}

export default App;
