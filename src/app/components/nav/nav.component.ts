import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(public appCom: AppComponent) { }
  logoutUser() {
    //this.appCom.isLoggedIn = false;
    this.appCom.loggedInUser = "";
  }
}
