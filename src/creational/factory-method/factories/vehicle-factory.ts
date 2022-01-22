import { Vehicle } from '../vehicle/vehicle-interface';

export abstract class VehicleFactory {
  // Factory Method
  abstract getVehicle(vehicleName: string): Vehicle;

  // Na factory, pode fazer logica, ou seja,  não precisa ser apenas o factory method
  pickUp(customerName: string, vehicleName: string): Vehicle {
    const car = this.getVehicle(vehicleName);
    car.pickUp(customerName);
    return car;
  }
}
