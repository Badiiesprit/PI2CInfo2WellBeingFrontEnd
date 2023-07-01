import { Component } from '@angular/core';
import {TokenService} from '../../../services/token/token.service';
import {Jwt} from 'jsonwebtoken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public username:string;
  public password:string;

  constructor(private tokenService:TokenService) { }

  submitForm(){

    this.tokenService.getToken(this.password ,this.username).subscribe(
      (response) => {
        if (response && response.token) {
          console.log(response.token);
          localStorage.setItem('token', response.token);

          window.location.href = 'admin/user';
          console.log(localStorage);

        }
      }
    );
  }

}
