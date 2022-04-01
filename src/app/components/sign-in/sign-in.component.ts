import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/client-message';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  screen = "Sign Up";
  clientMessage = new ClientMessage();
  cUser = new User();
  constructor(private uServ: UserService) { }

  loginUser() {

    if (!this.cUser.validLogIn()) {
      this.clientMessage.message = "All fields must be filled in."
      console.log(this.cUser);
      //console.log(this.clientMessage.message);
      return;

    }
    this.clientMessage.message = "";
    this.uServ.loginUser(this.cUser).subscribe(
      arg => {
        this.cUser.username = arg;
        console.log("The logged in user: "+arg);

      },
      () => this.clientMessage.message = "An error occurred. Please try again later."
    );

  }

}
