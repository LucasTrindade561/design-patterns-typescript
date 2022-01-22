import { DeviceImplementation } from '../device/device-implementations';

// Abstraction é aqui. No abstraction nós não implementamos nada, porém fazemos lógicas para que o -->
// device trabalhe
export class RemoteControl {
  constructor(protected device: DeviceImplementation) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
    console.log(
      `${this.device.getName()} power status: ${
        this.device.getPower() ? 'ON' : 'OFF'
      }`,
    );
  }
}
