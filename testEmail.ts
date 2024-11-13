import { sendEmail } from "./src/services/pinpointService";

// Define the test email details
const testEmailAddress = "daltry@nexvato.com";
const testSubject = "Test Email";
const testBody = "This is a test email sent from Nexvato.";

// Call the function to test email sending with provided arguments
sendEmail(testEmailAddress, testSubject, testBody).then(() => {
    console.log("Test email sent (if credentials are valid).");
}).catch((error) => {
    console.error("Error sending test email:", error);
});
