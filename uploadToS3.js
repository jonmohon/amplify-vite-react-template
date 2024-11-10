// Import necessary packages using ES module syntax
import { config } from 'dotenv';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
config();

// Directory setup to support __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// S3 configuration with specific endpoint
const s3 = new S3Client({
  region: 'us-east-2',  // Specify the correct region
  endpoint: 'https://s3.us-east-2.amazonaws.com', // Specify endpoint for us-east-2
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const bucketName = 'nexvato-images';
const folderPath = path.join(__dirname, 'public/admin-images');

// Function to upload a file to S3
const uploadFileToS3 = async (filePath, fileName) => {
  try {
    const fileContent = fs.readFileSync(filePath);

    const params = {
      Bucket: bucketName,
      Key: `admin-images/${fileName}`,
      Body: fileContent,
      ContentType: 'image/png',
    };

    const command = new PutObjectCommand(params);
    await s3.send(command);

    console.log(`File uploaded successfully: ${fileName}`);
  } catch (err) {
    console.error('Error uploading file:', err);
  }
};

// Function to read directory and upload all files to S3
const uploadDirectory = async () => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      uploadFileToS3(filePath, file);
    });
  });
};

// Start upload
uploadDirectory();
