import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Card } from 'src/app/models/card';
import data from './testFile.json';
import { NotificationService } from 'src/app/services/notification.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],

})

export class ViewComponent {

  cardIsFlipped: boolean = false;
  public count: number;
  navigation: number = 0;

  newCard = new Card(0,'','','',[],[],[],'');
  public cardList: Card[];
  subject: string;

  constructor(private notifyService: NotificationService, public AppComp: AppComponent) {
    this.cardList = []
    this.subject = '';
    this.newCard = this.AppComp.currentCard;
    this.count = 0;

   }

  showToasterInvalidSearch(){
  this.notifyService.showError("No flashcards found with that subject", "Error!")
}

   public updateFlashcard(searchContent) {

    this.AppComp.cardList = [];


    if(Array.isArray(data.subjects)) {
      data.subjects.forEach((element) => {

        if (element.subject.toUpperCase() == searchContent.toUpperCase()) {
          console.log('Element: ');
          console.log(element);

          console.log(this.count);
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

            this.AppComp.cardList.push(temp);


          })
          console.log('The Card information: ');
          console.log(this.cardList);
          console.log(this.AppComp.cardList);
          this.newCard = this.AppComp.cardList[0];

          this.AppComp.currentCard = this.newCard;
          this.changeHTML(this.newCard);

          console.log(this.newCard);
          console.log(this.AppComp.currentCard.id);

          console.log(this.count);

         }
      })

    } ;

          console.log(this.AppComp.cardList)
          if (this.AppComp.cardList.length == 0) {
            this.showToasterInvalidSearch();
          }

    console.log("The app card is: ");
    console.log(this.AppComp.currentCard);
    console.log(searchContent);
    // console.log(this.cardList);
    console.log(this.AppComp.cardList);
  }

  public changeHTML(newCard) {

    var question = document.getElementById("question");
    if (question) {
      question.innerHTML = this.AppComp.currentCard.question;
    }

    var answer = document.getElementById("answer");
    if (answer) {
      answer.innerHTML = this.AppComp.currentCard.answer;
    }

    console.log(newCard);
  }

  public flipFlashcard() {

    console.log(this.AppComp.currentCard);

    this.cardIsFlipped = !this.cardIsFlipped;

    //this.changeHTML(newCard);

    return this.cardIsFlipped;


  }

  public changeFlashcard(navigation) {

    console.log(this.AppComp.currentCard);
    console.log(navigation);
    this.cardIsFlipped = false;

    this.count += navigation;

    console.log(this.count);



    if (this.count == -1) {
      this.count = this.AppComp.cardList.length-1;
      console.log('This is the first card');
    }

    if (this.count == this.AppComp.cardList.length) {
      this.count = 0;
    }

    console.log(this.AppComp.cardList[this.count]);

    this.AppComp.currentCard = this.AppComp.cardList[this.count];

    this.changeHTML(this.AppComp.currentCard);
    console.log(this.count);
    console.log(this.AppComp.cardList);

  }





}
