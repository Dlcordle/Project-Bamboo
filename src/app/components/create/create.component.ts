import { JsonpClientBackend } from '@angular/common/http';
import { Component, getNgModuleById, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { UserService } from 'src/app/services/user.service';
import { ClientMessage } from 'src/app/models/client-message';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public card = new Card(0,'','','',[],[],[],'');
  clientMessage = new ClientMessage();

  public createCardFunction() 
  {
    console.log("Button Twas Clicked");
    console.log(this.card);

    var file;

    this.clientMessage.message = "";

    this.uServ.setGoogleDriveInitSetup().subscribe(
      arg => file = arg,
      () => this.clientMessage.message = "An error occurred. Please try again later."
    );

    this.uServ.setGoogleDriveUserSetup().subscribe(
      arg => file = arg,
      () => this.clientMessage.message = "An error occurred. Please try again later."
    );

    // this.uServ.setGoogleOathSetup().subscribe(
    //   arg => file = arg,
    //   () => this.clientMessage.message = "An error occurred. Please try again later."
    // );

    // this.uServ.createGoogleDriveFile().subscribe(
    //   arg => file = arg,
    //   () => this.clientMessage.message = "An error occurred. Please try again later."
    // );
  }

  public persistCardToGoogleDrive() 
  {
    
  }

  constructor(private uServ: UserService) { }

  ngOnInit(): void {
  }

}
