import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUser():Observable<User>{
  const url = 'https://api.github.com/users/ronie70';
  return this.http.get<User>(url);
  }
}
