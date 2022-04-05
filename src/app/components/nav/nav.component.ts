import { Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
<<<<<<< HEAD
import { Card } from 'src/app/models/card';
import { ViewComponent } from '../view/view.component';
=======
import { AppComponent } from 'src/app/app.component';
>>>>>>> 473ec2ffe9693a07bf665ce6e26eb03916b2f634

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

<<<<<<< HEAD
  public  searchContent: string = '';
  temp: Card[];
  navbarDown = false;

  constructor(private searchEx: ViewComponent) {

    this.temp = []
    }

  public performSearch() {

    if (!this.searchContent.trim()) {
      console.log('No search information entered');
      return;
    }

    console.log(this.searchContent);

    this.searchEx.updateFlashcard(this.searchContent)

  }

  public flipNavBar() {
    let x = document.getElementById('navbarSupportedContent');

    if (x) {
      this.navbarDown = !this.navbarDown;
      if (this.navbarDown) {
        x.style.display = 'flex';
      }
      else {
        x.style.display = 'none';
      }
    }
    else {
    }
  }


=======
  constructor(public appCom: AppComponent) { }
  logoutUser() {
    //this.appCom.isLoggedIn = false;
    this.appCom.loggedInUser = "";
  }
>>>>>>> 473ec2ffe9693a07bf665ce6e26eb03916b2f634
}
