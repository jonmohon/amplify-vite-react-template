import { AppSyncResolverEvent } from 'aws-lambda';

interface MyEvent {
  // Define your event properties here
  field: string;
}

export const handler = async (event: AppSyncResolverEvent<MyEvent>) => {
  // Basic logging for debugging
  console.log("Received event:", JSON.stringify(event, null, 2));

  // Example response
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Lambda!",
      input: event,
    }),
  };
};
