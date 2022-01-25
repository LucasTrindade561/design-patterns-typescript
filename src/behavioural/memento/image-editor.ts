import { ConcreteMemento } from './concrete-memento';
import { Memento } from './memento';

type Format = 'jpg' | 'jpeg' | 'png';

// Originator
export class ImageEditor {
  constructor(private filePath: string, private fileFormat: string) {}

  convertFormatTo(format: Format): void {
    this.fileFormat = format;
    this.filePath = this.filePath.split('.').slice(0, -1).join('');
    this.filePath += '.' + format;
  }

  save(): Readonly<Memento> {
    const date = new Date();

    return new ConcreteMemento(
      date.toISOString(),
      date,
      this.filePath,
      this.fileFormat,
    );
  }

  restore(memento: Memento): void {
    // Botamos memento, pois nao queremos que la no caretaker, a gnt consiga recuperar os dados e fazer a edicao deles
    const concreteMemento = memento as ConcreteMemento; // temos que fazer isso, pois nao teriamos varios dados se estivessemos apenas com o memento interface
    this.fileFormat = concreteMemento.getFileFormat();
    this.filePath = concreteMemento.getFilePath();
  }
}
