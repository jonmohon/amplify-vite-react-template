const AmplifyConfig = {
    Auth: {
      identityPoolId: "us-west-1:305b83e8-33ca-47bc-a9eb-096f2ee7e95f",
      region: "us-west-1",
      userPoolId: "us-west-1_Q0q2expYF",
      userPoolWebClientId: "76hdgt3t4lolil181g9s03at15",
    },
    API: {
      endpoints: [
        {
          name: "AppSyncApi",
          endpoint: "https://hqt46im335b77pb53p4f5x65w4.appsync-api.us-west-1.amazonaws.com/graphql",
          region: "us-west-1",
          authorizationType: "AMAZON_COGNITO_USER_POOLS", // or use "API_KEY" if appropriate
        },
      ],
    },
  };
  
  export default AmplifyConfig;
  