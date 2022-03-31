import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public card = new Card(0,'','','',[],[],[],'');

  public createCardFunction() {
    console.log("Button Twas Clicked");
    console.log(this.card);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
