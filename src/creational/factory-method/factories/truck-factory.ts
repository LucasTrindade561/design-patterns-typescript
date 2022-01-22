import { Truck } from '../vehicle/truck';
import { Vehicle } from '../vehicle/vehicle-interface';
import { VehicleFactory } from './vehicle-factory';

export class TruckFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Truck(vehicleName);
  }
}
