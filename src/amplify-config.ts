import config from '../amplify_outputs.json';

export const amplifyConfig = {
  API: {
    GraphQL: {
      endpoint: config.data.url,
      region: config.data.aws_region,
      defaultAuthorizationMode: config.data.default_authorization_type,
      apiKey: config.data.api_key
    }
  },
  Auth: {
    Cognito: {
      userPoolId: config.auth.user_pool_id,
      userPoolClientId: config.auth.user_pool_client_id,
      region: config.auth.aws_region,
      identityPoolId: config.auth.identity_pool_id
    }
  }
};

export default amplifyConfig;