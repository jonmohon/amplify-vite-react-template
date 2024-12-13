const AmplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.VITE_USER_POOL_ID,
      userPoolClientId: process.env.VITE_USER_POOL_CLIENT_ID,
      region: process.env.VITE_AWS_REGION
    }
  },
  API: {
    GraphQL: {
      endpoint: process.env.VITE_API_URL,
      region: process.env.VITE_AWS_REGION,
      defaultAuthMode: 'userPool'
    }
  }
};

export default AmplifyConfig;