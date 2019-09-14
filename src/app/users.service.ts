import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Options } from 'selenium-webdriver';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userUrl: String = "https://api.github.com/search/users?q=";

  constructor(private http: HttpClient) {
      
   }
  //  private extractData(res: Response) {
  //   let body = res;
  //   return body || { };
  // }
   getUsers(userName:any): Observable<any>{
     return this.http.get(this.userUrl + userName);
   }
}
