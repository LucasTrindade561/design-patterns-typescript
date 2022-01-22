import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { TruckFactory } from '../factories/truck-factory';
import { randomNumbers } from '../utils/random-numbers';
import { Vehicle } from '../vehicle/vehicle-interface';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const truckFactory = new TruckFactory();
  const truck = truckFactory.getVehicle('Mercedes Truck');
  const car1 = carFactory.getVehicle('Corolla');
  const car2 = carFactory.getVehicle('Celta');
  const bicycle = bicycleFactory.getVehicle('BMX');
  const cars = [car1, car2, bicycle, truck];
  return cars[randomNumbers(cars.length)];
}
