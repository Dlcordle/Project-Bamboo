import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
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
  constructor(private uServ: UserService, private appCom: AppComponent, private route: Router) { }

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
        if (arg != "") {
          this.cUser = new User();
          this.cUser.username = arg;
          //this.appCom.isLoggedIn = true;
          this.appCom.loggedInUser = arg;
          console.log("The logged in user: " + arg);
          this.clientMessage.message = "Welcome " + arg;
          this.route.navigate(['/home']);
        }
        else {
          this.cUser.pwd = "";
          this.clientMessage.message = "Invalid Login."
        }

      },
      () => this.clientMessage.message = "An error occurred. Please try again later."
    );

  }

}
