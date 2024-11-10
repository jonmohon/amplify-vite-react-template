// pinpointService.js
import { PinpointClient, SendMessagesCommand } from "@aws-sdk/client-pinpoint";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const region = process.env.AWS_REGION;

const pinpointClient = new PinpointClient({ region });
const sesClient = new SESClient({ region });

export async function sendSMS(phoneNumber, message) {
    const params = {
        ApplicationId: "your_pinpoint_application_id",
        MessageRequest: {
            Addresses: {
                [phoneNumber]: {
                    ChannelType: "SMS",
                },
            },
            MessageConfiguration: {
                SMSMessage: {
                    Body: message,
                    MessageType: "TRANSACTIONAL",
                },
            },
        },
    };

    try {
        const command = new SendMessagesCommand(params);
        const response = await pinpointClient.send(command);
        console.log("SMS sent:", response);
        return response;
    } catch (error) {
        console.error("Error sending SMS:", error);
        throw error;
    }
}

export async function sendEmail(emailAddress, subject, body) {
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
        Source: "your_verified_email@example.com",
    };

    try {
        const command = new SendEmailCommand(params);
        const response = await sesClient.send(command);
        console.log("Email sent:", response);
        return response;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}
