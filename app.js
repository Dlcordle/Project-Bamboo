const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const CLIENT_ID = '935113732311-s87p2a6n3qb2849q6mhonv6lre9caqrm.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN = '1//04W9FwrM0-n98CgYIARAAGAQSNwF-L9IrObitSMIZhDvEm_n5qP_UzPSoZc4faV8FuSZsYvVtHYRfkQPffQonodvfByC4_elBIYs';

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