import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import dotenv from 'dotenv';
dotenv.config();

// Retrieve environment variables for credentials
const accessKeyId = process.env.MY_APP_ACCESS_KEY_ID;
const secretAccessKey = process.env.MY_APP_SECRET_ACCESS_KEY;

// Directly configure the SESClient with the updated environment variable credentials and region
const sesClient = new SESClient({
  region: "us-east-2",
  credentials: {
    accessKeyId: accessKeyId as string,
    secretAccessKey: secretAccessKey as string,
  },
});

export async function sendEmail(emailAddress: string, subject: string, body: string) {
  const params = {
    Destination: {
      ToAddresses: [emailAddress],
    },
    Message: {
      Body: {
        Text: { Data: body },
      },
      Subject: { Data: subject },
    },
    Source: "hello@nexvato.com", // Ensure this email is verified in SES
  };

  try {
    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}
