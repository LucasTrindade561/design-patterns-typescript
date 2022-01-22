import { Customer } from '../customer/customer';
import { VehicleProtocol } from './vehicle-protocol';

export class IndividualCar implements VehicleProtocol {
  // private readonly, pois nao queremos manipular o customer from here
  constructor(public name: string, private readonly customer: Customer) {}

  pickUp(): void {
    console.log(
      `${this.name} is looking for ${this.customer.name} (INDIVIDUAL CAR)`,
    );
  }
}
