import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  userQueryString: string = '';
  @Output() onQueryString = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search(ss) {
    console.log(ss.value, "form data");
    this.onQueryString.emit(this.userQueryString);
  }

}
