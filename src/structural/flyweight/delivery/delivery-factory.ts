import { DeliveryFlyweightProtocol } from './delivery-flyweight-protocol';
import { DeliveryLocation } from './delivery-location';
import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from './delivery-types';

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, '').toLocaleLowerCase())
      .join('_');
  }

  makeLocation(
    intrinsicState: DeliveryLocationData,
  ): DeliveryFlyweightProtocol {
    const key = this.createId(intrinsicState);
    if (key in this.locations) return this.locations[key];
    this.locations[key] = new DeliveryLocation(intrinsicState);
    return this.locations[key];
  }

  getLocation(): DeliveryLocationDictionary {
    return this.locations;
  }
}
