import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  public searchContent: string = '';

  public performSearch() {

    console.log(this.searchContent);


    if (!this.searchContent.trim()) {
      console.log('No search information entered'); // pass this onto either the search menu
      return;
    }


  }



}
