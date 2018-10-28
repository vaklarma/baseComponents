import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dismissible = true;
  alertMessage: string;
  alertMessageTimeout: number;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
  }

  login(email: string, password: string) {
    if (!this._userService.login(email, password)) {
      this.alertMessage = 'Hiba van Hello ! ';
      this.alertMessageTimeout = 3000;
    }
  }

  clearError() {
    delete this.alertMessage;
  }

}
