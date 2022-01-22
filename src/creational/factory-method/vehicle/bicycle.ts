import { Vehicle } from './vehicle-interface';

export class Bicycle implements Vehicle {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} is looking for the ${customerName}.`);
  }

  stop(): void {
    console.log(`${this.name} stopped.`);
  }
}
