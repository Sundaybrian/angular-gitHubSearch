import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  userQuerySearch: string = '';

  constructor() { }

  ngOnInit() {
  }

  search(ss) {
    console.log(ss.value, "form data");
  }

}
