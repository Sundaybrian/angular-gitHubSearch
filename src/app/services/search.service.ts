import { GitUser } from './../models/git-user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../User-model/user';
import { Injectable } from '@angular/core';
import { RepoUser } from '../models/repo-user';



@Injectable({
  providedIn: 'root'
})

export class SearchService {

  _gitUser: User;
  _userRepo: RepoUser;
  _newFetchedRepo: RepoUser;
  _repoData = [];


  constructor(private httpClient: HttpClient) {
    this._gitUser = new User("", "", "", "", "", "");
    this._userRepo = new RepoUser("", "", "", new Date(), "");
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

      this.httpClient.get<any>(`https://api.github.com/users/${queryStr}/repos?access_token=${environment.apiKey}`).toPromise().then(response => {

        for (let i = 0; i < response.length; i++) {
          
          this._newFetchedRepo = new RepoUser(response[i].name, response[i].full_name, response[i].description,
            response[i].updated_at, response[i].html_url);
          this._repoData.push(this._newFetchedRepo)

        }

        resolve()

      }, error => {
        reject(error)
      })
    })

    return promise;
  }




}
