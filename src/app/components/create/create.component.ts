import { JsonpClientBackend } from '@angular/common/http';
import { Component, getNgModuleById, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { functionList as GoogleDriveFunctions } from 'src/app/services/google.drive.functions';


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
