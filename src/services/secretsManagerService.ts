import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";

// Set up the region and client for Secrets Manager
const region = "us-east-2";
const secretsManagerClient = new SecretsManagerClient({ region });

// Function to get credentials from AWS Secrets Manager
export async function getSecret() {
    const secretName = "prod"; // Name of the secret in AWS Secrets Manager

    try {
        const response = await secretsManagerClient.send(
            new GetSecretValueCommand({
                SecretId: secretName,
            })
        );

        if (response.SecretString) {
            const secret = JSON.parse(response.SecretString);
            const credentials = {
                accessKeyId: secret.MY_APP_ACCESS_KEY_ID,
                secretAccessKey: secret.MY_APP_SECRET_ACCESS_KEY,
            };
            console.log("Retrieved credentials:", credentials);
            return credentials;
        } else {
            console.error("SecretString is empty");
            return null;
        }
    } catch (error) {
        console.error("Error retrieving secret:", error);
        return null;
    }
}
