import { Component, OnInit } from '@angular/core';

import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

    subject: string = '';
    id: number = 0;
    // temp: Card[];
  constructor() {

  // this.temp = []   //initialization

  }






  ngOnInit(): void {

    // if(Array.isArray(data.subjects)) {
    //   data.subjects.forEach((element) => {

    //     if (element.subject == 'java') {
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
    //     }
    //   })
    // };


  }

  searchUsingKeyword(keyword: string) {
    keyword
    //console.log(NavComponent.performSearch())
  }


}
