import { Component, OnInit } from '@angular/core';
import data from './testFile.json';
import { Card } from 'src/app/models/card';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

    subject: string = '';
    id: number = 0;
    temp: string[];
  constructor() {

  this.temp = []   //initialization

  }

  holder: any = data.subjects[0];





  ngOnInit(): void {

    // const jasonTemp = JSON.parse(mode);

    console.log(data.subjects[0]);

    console.log(this.holder.cards[0].info);


    if(Array.isArray(data)) {
      data.subjects.forEach((element) => {
        if (element.subject == 'java') {
          //this.temp.push(element);
          console.log(this.temp);
        }
      })
    };



    // (data.forEach(() => {
    //   this.temp.push
    // });
    // data.json().filter(
    //   function(data)
    //   {
    //     return data.subject == 'java'
    //   }
    // );
  }

  searchUsingKeyword() {

    //console.log(NavComponent.performSearch())
  }


}

// fetch("./testFile.json")
//     .then(function(resp){
//       return resp.json();
//     })
//     .then(function(data) {
//       console.log(data.subjects);
//     });
