import { DeliveryFlyweightProtocol } from './delivery-flyweight-protocol';
import { DeliveryLocationData } from './delivery-types';

export class DeliveryLocation implements DeliveryFlyweightProtocol {
  // Esse constructor é o estado intrínseco
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  // name e number são o estado extrínseco
  deliver(name: string, number: string): void {
    console.log('Delivery to %s', name);
    console.log('In', this.intrinsicState.street, this.intrinsicState.city);
    console.log('Number:', number);
    console.log('---');
  }
}
