import { Injectable } from '@angular/core';
import { User } from '../User';
import { Match } from '../component/match';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http :HttpClient) { }

  public loginUserService(user:User):Observable<any>{

    console.log("inside login service");
    return this.http.post<any>("http://localhost:8081/login",user)
  }

  public registerUser(user:User):Observable<any>{

    console.log("inside register service");
    return this.http.post<any>("http://localhost:8081/registeruser",user)
  }

  
  getMatchSechdule(): Observable<any> {
   
     //return jsonarr;
    return this.http.get<any>("http://localhost:8081/loginSuccess");
  }
  /* 
    {
      matchType: "OneDay",
      groundName: "Sydney Cricket Ground,Sydney",
      oppositeTeam: "Australia",
      matchDate: "2020-04-02"
    },
    {
      matchType: "Test",
      groundName: "Melbourne Cricket Ground",
      oppositeTeam: "Bangladesh",
      matchDate: "2020-06-13"
    },
    {
      matchType: "Test",
      groundName: "Wankhede,Mumbai",
      oppositeTeam:"England",
      matchDate: "2020-06-23"
    }
   */

  }


