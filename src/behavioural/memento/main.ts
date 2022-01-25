import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('jpg');

backupManager.backup();
imageEditor.convertFormatTo('png');

backupManager.backup();
imageEditor.convertFormatTo('jpeg');

console.log(imageEditor); // jpeg
backupManager.undo(); // será desfeito
console.log(imageEditor); // png
backupManager.undo(); // será desfeito
console.log(imageEditor); // jpg
backupManager.undo(); // será desfeito
console.log(imageEditor); // png
backupManager.undo(); // será desfeito
console.log(imageEditor); // no mementos
