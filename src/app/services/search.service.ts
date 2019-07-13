import { GitUser } from './../models/git-user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../User-model/user';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  _gitUser: User;

  constructor(private httpClient: HttpClient) {
    this._gitUser = new User("", "", "", "");
  }

  getUser() {
    let promise = new Promise((resolve, reject) => {
      this.httpClient.get<GitUser>(environment.apiUrl).toPromise().then(response => {
        this._gitUser.location = response.location;
        this._gitUser.name = response.name;
        this._gitUser.avatar_url = response.avatar_url;
        this._gitUser.company = response.company;

        resolve()
      },
        error => {
          this._gitUser.location = "null";
          this._gitUser.name = "null";
          this._gitUser.avatar_url = "null";
          this._gitUser.company = "null";
          reject(error)
        }
      )
    })

    return promise;
  }


}
