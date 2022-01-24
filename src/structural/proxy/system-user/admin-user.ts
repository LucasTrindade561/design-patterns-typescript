import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
  constructor(public firstName: string, public userName: string) {}

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Rua Antonio Carlos', number: 200 },
          { street: 'Rua A', number: 4 },
        ]);
      }, 1000);
    });
  }
}
