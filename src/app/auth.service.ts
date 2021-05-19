import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  obj: Object
}

// {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
// }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedInStatus = false

  constructor(private http : HttpClient) { }

  setLoggedIn(val : boolean) {
    this.loggedInStatus = true
  }

  getUserDetails(username : any, password : any) {
    // auth code
    //console.log("this is auth function", username, password)
    return this.http.post('https://reqres.in/api/login', {
      username,
      password
    })
  }
}