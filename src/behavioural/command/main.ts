import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-light-house';

// Receiver
const bedroomLight = new SmartHouseLight('Bedroom light');
const bathroomLight = new SmartHouseLight('Bathroom light');

// Command
const bedroomPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomPowerCommand = new LightPowerCommand(bathroomLight);
const bedroomIntensityCommand = new LightIntensityCommand(bedroomLight);

// Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn2', bedroomPowerCommand);
smartHouseApp.addCommand('btnBathroom', bathroomPowerCommand);
smartHouseApp.addCommand('btnBedroom', bedroomIntensityCommand);

smartHouseApp.executeCommand('btn2');
smartHouseApp.undoCommand('btn2');

smartHouseApp.executeCommand('btnBathroom');
smartHouseApp.undoCommand('btnBathroom');

for (let i = 0; i < 5; i++) {
  smartHouseApp.executeCommand('btnBedroom');
}

for (let i = 0; i < 3; i++) {
  smartHouseApp.undoCommand('btnBedroom');
}
