import {Injectable} from '@angular/core';
import {UserModel} from './user-model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isLoggedIn = false;
  private _user: UserModel;
  private _allUser: UserModel[];

  constructor(private _router: Router) {
    this._allUser = [
      new UserModel({
        'id': 1,
        'name': 'Makkmarci',
        'email': 'makkmarci@gmail.com',
        'username': 'makkmarci',
        'password': 'makkmarci',
        'profilePictureUrl': 'https://raw.githubusercontent.com/Infernus101/ProfileUI/c62f1ba2cf9692ddd69018dfd1eeae49f8f0bf2e/icon.png',
      }),
      new UserModel({
        'id': 2,
        'name': 'Bélahuligán',
        'email': 'Bélahuligán@gmail.com',
        'username': 'belahuligan',
        'password': 'belahuligan',
        'profilePictureUrl': 'https://raw.githubusercontent.com/Infernus101/ProfileUI/c62f1ba2cf9692ddd69018dfd1eeae49f8f0bf2e/icon.png',

      }),
      new UserModel({
        'id': 3,
        'name': 'Hulyegyerek',
        'email': 'hulyegyerek@gmail.com',
        'username': 'h',
        'password': 'h',
        'profilePictureUrl': 'https://raw.githubusercontent.com/Infernus101/ProfileUI/c62f1ba2cf9692ddd69018dfd1eeae49f8f0bf2e/icon.png',

      }),
      new UserModel({
        'id': 4,
        'name': 'Hulyegyerek',
        'email': 'hulyegyerek@gmail.com',
        'username': 'hulyegyerek',
        'password': 'hulyegyerek',
        'profilePictureUrl': 'https://t6.rbxcdn.com/be06f7f6829ffd44d6c3f44c873f016d',

      }),
    ];
  }

  login(username: string, password: string): boolean {

    this._allUser.filter(allu => {
      if (username === allu.username && password === allu.password) {
        this._user = new UserModel(allu);
        this.isLoggedIn = true;
        console.log(this._user);
        this._router.navigate(['/user/profile']);
      }
    });
    return false;
    // if (email === 'makika' && password === 'makika') {
    //   this._user = new UserModel(UserModel.exampleUser);
    //   this.isLoggedIn = true;
    //   this._router.navigate(['/user/profile']);
    // }
    // return false;
  }

  logout() {

  }

  register() {

  }

  getCurrentUser() {
    return this._user;
  }

  getUserById(id: number) {
    const user = this._allUser.filter(allu => id === allu.id);
    return user.length > 0 ? user[0] : new UserModel(UserModel.exampleUser);
  }
}
