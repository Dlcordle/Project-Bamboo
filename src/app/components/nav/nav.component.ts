import { Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

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


}
