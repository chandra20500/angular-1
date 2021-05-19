import { Component, OnInit } from '@angular/core';
// Authservice for user auth
import { AuthService } from '../auth.service';

// routing to redirect ot admin page
import { Router } from '@angular/router'

import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  token : any;
  hide = true;/* password visibility */
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required, Validators.minLength(6)]);
  constructor(private Auth : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    /* input check state */
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    else if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    else if (this.password.errors?.minlength) {
      return 'password must be longer than 6';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  login(event : any): void {
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    this.Auth.getUserDetails(username, password).subscribe(data => {
      this.token = data
      /* alloying user to access admin page */
      this.Auth.setLoggedIn(true)
      this.router.navigate(['admin'])
    });
  }

}
