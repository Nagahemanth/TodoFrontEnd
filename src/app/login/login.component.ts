import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = 'hemanth';
password = '';
loginvalid;
errorMessage = 'invalid login credentials';
  constructor(private router: Router, private hardcodedAuth: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  loginMethod(){
    if(this.hardcodedAuth.authenticate(this.username,this.password)){
      this.loginvalid = false;
      this.router.navigate(['welcome',this.username]);
    }else {
      this.loginvalid= true;
    }
  }
}
