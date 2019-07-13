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
  _repos: any;
  constructor(private searchService: SearchService) {

  }

  ngOnInit() {

    console.log(this._user, "data is live");
  }

  onQuerySearch(queryString: string) {
    this.searchService.getUser(queryString);
    this._user = this.searchService._gitUser
    // this._repos = this.searchService._repoData
    // console.log(this._repos);
  }





}
