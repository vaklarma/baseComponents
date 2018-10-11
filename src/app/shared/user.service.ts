import {Injectable} from '@angular/core';
import {UserModel} from './user-model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isLoggedIn = false;
  private _user: UserModel;

  constructor(private _router: Router) {
  }

  login(email: string, password: string): boolean {
    if (email === 'makika' && password === 'makika') {
      this._user = new UserModel(UserModel.exampleUser);
      this.isLoggedIn = true;
      this._router.navigate(['/user/profile']);
    }
    return false;
  }

  logout() {

  }

  register() {

  }
  getCurrentUser() {
    return this._user;
  }
}
