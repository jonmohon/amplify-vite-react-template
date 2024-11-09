import { useAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const { signOut } = useAuthenticator();

  return (
    <main>
      {/* Other components */}
      <button onClick={signOut}>Sign out test</button>
    </main>
  );
}

export default App;
