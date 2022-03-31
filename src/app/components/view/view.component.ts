import { Component } from '@angular/core';
import { NgModule } from '@angular/core';





@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent {

  cardIsFlipped: boolean = false;

  constructor() { }

  public flipFlashcard(): boolean {

    this.cardIsFlipped = !this.cardIsFlipped;

    return this.cardIsFlipped;
  }


}
