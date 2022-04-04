import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {


  //searchEx;

  public  searchContent: string = '';
   temp: Card[];

  constructor(private searchEx: ViewComponent) {
    this.temp = []   //initialization

    //searchEx = new ViewComponent();
  }

  public performSearch() {
    if (!this.searchContent.trim()) {
      console.log('No search information entered'); // pass this onto either the search menu
      return;
    }
    console.log(this.searchContent);

    this.searchEx.updateFlashcard(this.searchContent);
    this.searchEx.flipFlashcard();
    this.searchEx.flipFlashcard;
    // if(Array.isArray(data.subjects)) {
    //   data.subjects.forEach((element) => {

    //     if (element.subject == this.searchContent) {
    //       console.log('Element: ');
    //       console.log(element);

    //       element.cards.forEach((target) => {
    //         var newCard = new Card(0,'','','',[],[],[],'');
    //         newCard.id = target.id;
    //         newCard.subject = element.subject;
    //         newCard.question = target.info.question;
    //         newCard.answer = target.info.answer;
    //         newCard.relevant_topics = target.info.relevant_topics;
    //         newCard.extra_resources = target.info.extra_resources;
    //         newCard.relevant_cards = target.info.relevant_cards;
    //         newCard.created_by = target.info.created_by;

    //         this.temp.push(newCard);
    //       })
    //       console.log('The Card information: ');
    //       console.log(this.temp);
    //      } // else { // create a if for if no matches
    // //   console.log('The search result was not found');
    // // }
    //   })
    // } ;



  }


}
