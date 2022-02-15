import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.baseUrl;
  constructor(
    private httpClient: HttpClient,
  ) { }

    
  public register(user: User): Observable<any> {
    return this.httpClient.post(this.url + '/', user);
  }

}
