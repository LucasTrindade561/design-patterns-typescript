import { Tv } from './device/tv';
import { Radio } from './device/radio';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlVolume } from './remote-control/remote-control-with-volume';

export function clientCode(
  abstraction: RemoteControl | RemoteControlVolume,
): void {
  abstraction.togglePower(); // true

  // Type Guard
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp(); //20
  abstraction.volumeUp(); //30
  abstraction.volumeDown(); //20
}

const tv = new Tv();
const radio = new Radio();
const radioRemoteControl = new RemoteControlVolume(radio);
clientCode(radioRemoteControl);

console.log('---');

const tvRemoteControl = new RemoteControl(tv);
clientCode(tvRemoteControl);
