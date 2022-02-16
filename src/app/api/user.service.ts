import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.baseUrl;
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
  ) { }

    
  public register(user: User): Observable<any> {
    return this.httpClient.post(this.url + '/', user).pipe(map((token: any) => {
      // store jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('token', token);
      this.tokenService.nextToken(token);
      return token;
      
    }));
  }

  public logIn(test: HttpParams): Observable<any> {
    return this.httpClient.post(this.url + '/token', test).pipe(map((token: any) => {
      // store jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('token', token);
      console.log(token.payload.role);
      console.log(token.payload.userid);
      this.tokenService.nextToken(token.payload.role);
      
      return token;
    }));
  }



}
