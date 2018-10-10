export class UserModel {
  id: number;
  name: string;
  email: string;

constructor (param?: UserModel) {
  if (param) {
    Object.assign(this, param);
  }
}
  static get exampleUser(): UserModel {
    return {
      id: 0,
      name: 'Makkmarci Béla',
      email: 'makkmarci@gmai.com'
    };
  }

}
