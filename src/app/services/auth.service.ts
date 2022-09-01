import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 
import { HttpClient } from '@angular/common/http';
import { login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl ;

   //<--------------- service for retrieving all cars --------------- >
  //  getCars():Observable<login[]>{
  //   return this.http.get<login[]>(this.apiUrl);
  // }

   //<--------------- service for logging in --------------- >
   login(loginData:login) {
    return this.http.post<login>(this.apiUrl + '/login', loginData);
  }

}
