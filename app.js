import Info from "Storage.json"

const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const CLIENT_ID = Info.CLIENT_ID;
const CLIENT_SECRET = Info.CLIENT_SECRET;
const REDIRECT_URI = Info.REDIRECT_URI;

const REFRESH_TOKEN = Info.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
});
//C:\Users\David\Documents\Revature_Programs\Programs\project-bamboo\Project-Bamboo\src\assets\Hello.txt
const filePath = path.join(__dirname, 'Hello.txt');

async function uploadFile() {

    try 
    {
        const response = await drive.files.create({
            requestBody: {
                name: 'HelloTesterFile.txt',
                mimeType: 'text/*'
            },
            media: {
                mimeType: 'text/*',
                body: fs.createReadStream(filePath)
            }
        })

        console.log(response.data);
    }
    catch (error)
    {
        console.log(error.message);
    }
}

//uploadFile();