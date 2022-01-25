import { ImageEditor } from './image-editor';
import { Memento } from './memento';

export class ImageEditorBackupManager {
  private mementos: Memento[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log(`Backup: saving the state of ImageEditor`);
    // salvano o backup dentro do array de memento
    this.mementos.push(this.imageEditor.save());
  }

  undo(): void {
    const memento = this.mementos.pop(); // pegando o ultimo memento salvo dentro do array de mementos

    if (!memento) {
      console.log('Backup: no mementos');
      return;
    }

    this.imageEditor.restore(memento);
    console.log(`BACKUP: ${memento.getName()} was restored successfully`);
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}
