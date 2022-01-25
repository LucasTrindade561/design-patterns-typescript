import { SmartHouseCommandProtocol } from './command-protocol';

export class SmartHouseApp {
  private commands: { [key: string]: SmartHouseCommandProtocol } = {};

  addCommand(key: string, command: SmartHouseCommandProtocol): void {
    if (key in this.commands) return console.log('Already exists this btn');
    this.commands[key] = command;
  }

  executeCommand(key: string): void {
    this.commands[key].execute();
  }

  undoCommand(key: string): void {
    this.commands[key].undo();
  }
}
