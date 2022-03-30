import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  title = 'Project Bamboo - a Flashcard Study tool';

  desc = 'Bamboo allows users to search for flashcards based on a topic that they enter and the program will give them all cards relating to that topic.'

  desc2 = 'Each flashcard will have a question or phrase and can be clicked to reveal the answer or definition on the other side.'

  desc3 = 'Users will also be able to create their own flashcards, which can be viewed by other users.'

  }


