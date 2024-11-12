import { sendEmail } from "./src/services/pinpointService";

// Define the test email details
const testEmailAddress = "daltry@nexvato.com";
const testSubject = "Win $1 Million by Answering this Question";
const testBody = "People who annoy you?";

// Call the function to test email sending with provided arguments
sendEmail(testEmailAddress, testSubject, testBody).then(() => {
    console.log("Test email sent (if credentials are valid).");
}).catch((error) => {
    console.error("Error sending test email:", error);
});
