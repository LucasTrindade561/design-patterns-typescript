import { RemoteControl } from './remote-control';

// Basicamente o remote control porém com volume, vai dar para ser usado tbm na implementação
export class RemoteControlVolume extends RemoteControl {
  volumeUp(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() + 10);
    console.log(
      `${this.device.getName()} had ${oldVolume} and now it has ${this.device.getVolume()}`,
    );
  }

  volumeDown(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() - 10);
    console.log(
      `${this.device.getName()} had ${oldVolume} and now it has ${this.device.getVolume()}`,
    );
  }
}
