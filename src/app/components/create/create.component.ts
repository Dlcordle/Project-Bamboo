import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN,  REDIRECT_URI} from 'src/app/Storage.json';
import { Card } from 'src/app/models/card';

const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

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

const filePath = path.join(__dirname, 'assets/cards.json');

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
      let errorMessage = "Try-Catch in create component with strange behavior";
      if(error instanceof Error)
      {
        errorMessage = error.message;
      }
      console.log(errorMessage);
  }
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public card = new Card(0,'','','',[],[],[],'');

  public createCardFunction() 
  {
    console.log("Button Twas Clicked");
    console.log(this.card);
  }

  public persistCardToGoogleDrive() 
  {
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
