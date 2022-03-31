import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/client-message';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {


  clientMessage = new ClientMessage();
  screen = "Sign Up";

  cUser = new User();

  constructor(private uServ: UserService) { }


  registerUser(): void {

    if (!this.cUser.valid()) {
      console.log("Invalid values");
      console.log(this.cUser);
      this.clientMessage.message = "All fields must be filled in."
      console.log(this.clientMessage.message);
      return;
    }
    this.clientMessage.message = "";


    this.uServ.registerUser(this.cUser).subscribe(
      data => {
        console.log("data: " + data);
        this.cUser = new User();
        this.cUser.username = data;
        this.clientMessage.message = "Registered";
      },
      () => {
        this.clientMessage.message = "An error occurred. Please try again later.";
        this.cUser = new User();
      }
    );
   }



}
