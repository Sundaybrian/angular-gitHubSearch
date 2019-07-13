import { User } from './../../User-model/user';
import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  _user: User;
  constructor(private searchService: SearchService) {

  }

  ngOnInit() {
    this.searchService.getUser()
    this._user = this.searchService._gitUser
    console.log(this._user, "data is live");
  }

  



}
