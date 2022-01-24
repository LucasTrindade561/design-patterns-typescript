// Proxy Virtual, Proxy Cache e Proxy Inteligente --> Esse System
import { AdminUser } from './admin-user';
import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

// Aqui nos só passamos chamadas para o objeto real, quando nao tivermos coisa no cache
export class SystemUserProxy implements SystemUserProtocol {
  private realUser: SystemUserProtocol | null = null;
  private realUserAddress: SystemUserAddressProtocol[] | null = null;

  constructor(public firstName: string, public userName: string) {}

  private createUser(): SystemUserProtocol {
    if (this.realUser === null) {
      this.realUser = new AdminUser(this.firstName, this.userName);
    }
    return this.realUser;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    this.realUser = this.createUser(); // Isso aqui foi feito para garantir que o user sempre esteja criado

    // Caso nao exista nenhum endereco no cache, ele vai buscar do real user, que no caso, ja esta setado.
    if (this.realUserAddress === null) {
      this.realUserAddress = await this.realUser.getAddresses();
    }

    return this.realUserAddress;
  }
}
