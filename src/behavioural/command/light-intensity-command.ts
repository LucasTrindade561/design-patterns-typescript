import { SmartHouseCommandProtocol } from './command-protocol';
import { SmartHouseLight } from './smart-light-house';

export class LightIntensityCommand implements SmartHouseCommandProtocol {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(`The intensity of ${this.light.name} is ${intensity}`);
  }

  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(`The intensity of ${this.light.name} is ${intensity}`);
  }
}
