import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import data from './testFile.json';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {

  cardIsFlipped: boolean = false;
  count: number = 0;

  public newCard = new Card(0,'','','',[],[],[],'');
  public cardList: Card[];



  constructor() {
    this.cardList = []
   }

  ngOnInit(): void {

  }

  public changeHTML() {

    var question = document.getElementById("question");
    if (question) {
      question.innerHTML = this.newCard.question;
    }

    var answer = document.getElementById("answer");
    if (answer) {
      answer.innerHTML = this.newCard.answer;
    }

    // var extra_resources = document.getElementById("extra_resources");
    // if (extra_resources) {
    //   extra_resources[].innerHTML = this.newCard.extra_resources;
    // }

    console.log(this.newCard);
  }

  public flipFlashcard() {

    console.log(this.newCard);

    this.cardIsFlipped = !this.cardIsFlipped;
    return this.cardIsFlipped;


  }

  public changeFlashcard(count) {

    console.log(this.cardList);
    this.cardIsFlipped = false;

    this.changeHTML();

    if (count == -1) {
      console.log('Back')
    }

    if (count == 1) {
      console.log('Forward')
    }
    // Take in the id of the flashcard that is currently shown and increment either up
    // or down depending on the button that was clicked

  }

  public updateFlashcard(searchContent) {

    if(Array.isArray(data.subjects)) {
      data.subjects.forEach((element) => {

        if (element.subject == searchContent) {
          console.log('Element: ');
          console.log(element);

          element.cards.forEach((target) => {
            var temp = new Card(0,'','','',[],[],[],'');
            temp.id = target.id;
            temp.subject = element.subject;
            temp.question = target.info.question;
            temp.answer = target.info.answer;
            temp.relevant_topics = target.info.relevant_topics;
            temp.extra_resources = target.info.extra_resources;
            temp.relevant_cards = target.info.relevant_cards;
            temp.created_by = target.info.created_by;

            this.cardList.push(temp);
          })
          console.log('The Card information: ');
          console.log(this.cardList);
          this.newCard = this.cardList[0];

          this.changeHTML();


          console.log(this.newCard);
         } // else { // create a if for if no matches
    //   console.log('The search result was not found');
    // }
      })
    } ;

  }



}
