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
  _repoData: any;

  constructor(private httpClient: HttpClient) {
    this._gitUser = new User("", "", "", "", "", "");
    this._repoData = [];
  }

  getUser(queryStr) {
    let promise = new Promise((resolve, reject) => {
      this.httpClient.get<GitUser>(`https://api.github.com/users/${queryStr}?access_token=${environment.apiKey}`).toPromise().then(response => {

        this._gitUser.location = response.location;
        this._gitUser.name = response.name;
        this._gitUser.avatar_url = response.avatar_url;
        this._gitUser.company = response.company;
        this._gitUser.login = response.login;
        this._gitUser.bio = response.bio

        resolve()
      },
        error => {

          reject(error)
        }
      )

      // this.httpClient.get<any>(`https://api.github.com/users/${queryStr}/repos?access_token=${environment.apiKey}`).toPromise().then(response => {

      //   this._repoData = response;

      //   resolve()

      // }, error => {
      //   reject(error)
      // })
    })

    return promise;
  }




}
