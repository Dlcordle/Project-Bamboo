import { Component } from '@angular/core';
import { Card } from './models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-bamboo';
<<<<<<< HEAD
  currentCard = new Card(0, 'Maybe a little subject goes here', 'This is the template for a question! :D', 'This is where an answer would go :)', [], [], [], '')
  cardList: Card [] = [this.currentCard];
=======
  isLoggedIn: boolean = false;
  loggedInUser: string = "";
>>>>>>> 473ec2ffe9693a07bf665ce6e26eb03916b2f634
}
