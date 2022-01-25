import { SmartHouseCommandProtocol } from './command-protocol';
import { SmartHouseLight } from './smart-light-house';

export class LightPowerCommand implements SmartHouseCommandProtocol {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}
