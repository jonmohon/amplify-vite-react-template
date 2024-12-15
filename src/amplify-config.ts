import config from '../amplify_outputs.json';

// filepath: src/amplify-config.ts
export const amplifyConfig = {
  API: {
    GraphQL: {
      endpoint: config.data.url,
      region: config.data.aws_region,
      defaultAuthMode: config.data.default_authorization_type, // Use 'defaultAuthMode' instead of 'defaultAuthorizationMode'
      apiKey: config.data.api_key,
    },
  },
  Auth: {
    Cognito: {
      userPoolId: config.auth.user_pool_id,
      userPoolClientId: config.auth.user_pool_client_id,
      region: config.auth.aws_region,
      identityPoolId: config.auth.identity_pool_id,
    },
  },
};

export default amplifyConfig;