import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
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



  public newCard: Card;
  private fakeCard = this.appCompnent.currentCard;
  public cardList: Card[];
  private billy;



  constructor(private appCompnent: AppComponent) {
    console.log("Constructing View Component");
    this.billy = 5;
    this.cardList = [];
    this.newCard = this.appCompnent.currentCard;
   }

  ngOnInit(): void {

  }

  public changeHTML() {
    console.log("The app card ìn HTML is ");
    console.log(this.appCompnent.currentCard);
    console.log("Changing HTML");

    var question = document.getElementById("question");
    if (question) {
      question.innerHTML = this.appCompnent.currentCard.question;
    }

    var answer = document.getElementById("answer");
    if (answer) {
      answer.innerHTML = this.appCompnent.currentCard.answer;
    }

    // var extra_resources = document.getElementById("extra_resources");
    // if (extra_resources) {
    //   extra_resources[].innerHTML = this.newCard.extra_resources;
    // }

    console.log(this.newCard);
  }

  public flipFlashcard() {
    console.log("The app card ìn flip is ");
    console.log(this.appCompnent.currentCard.question);


    this.newCard = this.appCompnent.currentCard;
    // console.log("Billy:");
    // console.log(this.billy);

    // console.log("Flipping Flashcard");
    //     console.log("The card is ");
    // console.log(this.newCard);
    // console.log("The Fake card is ");
    // console.log(this.fakeCard);

    this.cardIsFlipped = !this.cardIsFlipped;

    return this.cardIsFlipped;


  }

  public changeFlashcard(count) {
    console.log("The app card ìn change flashcard is ");
    console.log(this.appCompnent.currentCard.question);

    //this.newCard = this.appCompnent.currentCard;
    // console.log("Changing Flashcard");
    //     console.log("The card is ");
    // console.log(this.newCard);
    // console.log(this.cardList);
    this.cardIsFlipped = false;

    //this.changeHTML();

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
    // console.log("Updating Flashcard");
    // this.billy = 10;



    if (Array.isArray(data.subjects)) {



      data.subjects.forEach((element) => {
        // console.log(element);


        if (element.subject.toUpperCase == searchContent.toUpperCase) {
          // console.log('Element: ');
          // console.log(element);

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
          // console.log('The Card information: ');
          // console.log(this.cardList);
          this.newCard = this.cardList[0];
          this.fakeCard = this.newCard;

          this.appCompnent.currentCard = this.newCard;
          //this.changeHTML();


          console.log(this.newCard);
         } // else { // create a if for if no matches
    //   console.log('The search result was not found');
    // }
      })
    } ;

    // console.log("The card is ");
    // console.log(this.newCard);


    console.log("The app card is ");
    console.log(this.appCompnent.currentCard);
  }



}
