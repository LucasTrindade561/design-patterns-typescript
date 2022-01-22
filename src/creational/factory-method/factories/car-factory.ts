import { Car } from '../vehicle/car';
import { Vehicle } from '../vehicle/vehicle-interface';
import { VehicleFactory } from './vehicle-factory';

// Aqui estamos apenas sobrescrevando o método VehicleFactory
export class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
