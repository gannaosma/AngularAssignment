import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  userName = '';
  password = '';

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  Login(){
    const sucess = this.Auth.login(this.userName, this.password)
    if(sucess){
      const redirect = localStorage.getItem('redirectAfterLogin') || '/Home'
      localStorage.removeItem('redirectAfterLogin')
      this.router.navigateByUrl(redirect);
    }
  }
}
