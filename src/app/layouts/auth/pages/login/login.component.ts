import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  authError: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authError = '';
      if(this.email === 'Zen@sayollo.com' && this.password == 123456) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('email', this.email);
        this.router.navigateByUrl('/main');
        return;
      }
      this.authError = 'Please provide correct credentials';

  }
}
