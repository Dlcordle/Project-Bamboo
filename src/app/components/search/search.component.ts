import { Component, OnInit } from '@angular/core';
import mode from './testFile.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

    subject: string = '';
    id: number = 0;
  constructor() { }





  ngOnInit(): void {

    // const jasonTemp = JSON.parse(mode);

    console.log(mode.subjects[0]);

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
