import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/client-message';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  screen = "Sign Up";
  clientMessage = new ClientMessage();
  cUser = new User();
  constructor() { }

  loginUser() {
    console.log(this.cUser);

  }

}
