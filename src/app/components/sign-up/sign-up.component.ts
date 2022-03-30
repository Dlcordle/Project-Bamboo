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
    console.log(this.cUser);
    //this.uServ.registerUser(this.cUser).subscribe(arg => this.cUser = arg);
   }



}
