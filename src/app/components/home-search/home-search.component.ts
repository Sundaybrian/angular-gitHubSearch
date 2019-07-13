import { User } from './../../User-model/user';
import { GitUser } from './../../models/git-user';
import { SearchService } from './../../services/search.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  _user: User;
  constructor(private httpClient: HttpClient) {
    this._user = new User("", "", "", "");
  }

  ngOnInit() {
    this.getUser()
    console.log(this._user, "ngOnInit");
  }

  getUser() {
    let promise = new Promise((resolve, reject) => {
      this.httpClient.get<GitUser>(environment.apiUrl).toPromise().then(response => {
        this._user.location = response.location;
        this._user.name = response.name;
        this._user.avatar_url = response.avatar_url;
        this._user.company = response.company;

        resolve()
      },
        error => {
          this._user.location = "null";
          this._user.name = "null";
          this._user.avatar_url = "null";
          this._user.company = "null";
          reject(error)
        }
      )
    })

    return promise;
  }

}
