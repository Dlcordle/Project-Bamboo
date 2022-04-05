import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';
import { ViewComponent } from '../view/view.component';
import { NotificationService } from 'src/app/services/notification.service'
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {


  public  searchContent: string = '';
  temp: Card[];
  navbarDown = false;

  constructor(private notifyService: NotificationService, private searchEx: ViewComponent, public appCom: AppComponent) {

    this.temp = []
    }


showToasterInvalidSearch(){
      this.notifyService.showError("No flashcards found with that subject", "Error!")
    }

  public performSearch() {



    if (!this.searchContent.trim()) {
      console.log('No search information entered');
      this.showToasterInvalidSearch();
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

  logoutUser() {
    //this.appCom.isLoggedIn = false;
    this.appCom.loggedInUser = "";
  }

}
