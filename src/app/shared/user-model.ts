export class UserModel {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  permission?: string;
  profilePictureUrl: string;

constructor (param?: UserModel) {
  if (param) {
    Object.assign(this, param);
  }
}
  static get exampleUser(): UserModel {
    return {
      id: 666,
      name: 'Example Béla',
      email: 'makkmarci@gmai.com',
      username: 'makkmarci',
      password: 'makkmarci',
      permission: 'admin',
      profilePictureUrl: 'http://bestvoyage.in/wp-content/uploads/profile.png',

    };
  }

}
