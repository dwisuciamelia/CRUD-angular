import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  data = {
    email: '',
    password: '',
  };
  constructor(private loginService: LoginService) {}

  submit() {
    const data = {
      email: this.data.email,
      password: this.data.password,
    };
    console.log(data);
    this.loginService.logIn(data).subscribe();
  }
}
