export class UserModel {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  profilePictureUrl: string;

constructor (param?: UserModel) {
  if (param) {
    Object.assign(this, param);
  }
}
  static get exampleUser(): UserModel {
    return {
      id: 125,
      name: 'Makkmarci Béla',
      email: 'makkmarci@gmai.com',
      username: 'makkmarci',
      password: 'makkmarci',
      profilePictureUrl: 'http://bestvoyage.in/wp-content/uploads/profile.png',

    };
  }

}
