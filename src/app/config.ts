import { Amplify } from 'aws-amplify';
import { fetchAuthSession } from 'aws-amplify/auth';

const config = {
  Auth: {
    Cognito: {
      region: 'us-west-1',
      userPoolId: 'us-west-1_Q0q2expYF',
      userPoolClientId: '76hdgt3t4lolil181g9s03at15'
    }
  }
};

Amplify.configure(config);

export async function checkAuth() {
  try {
    const session = await fetchAuthSession();
    return session.tokens !== undefined;
  } catch (err) {
    console.error('Auth check failed:', err);
    return false;
  }
}

interface Schema {
  // Add your schema properties here
}

declare global {
  interface Window {
    Schema: Schema;
  }
}
