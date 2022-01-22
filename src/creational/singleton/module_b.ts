// isso é um singleton, pois no momento que foi executado, isso foi para toda a aplicação
// fazendo que ele seja unico na aplicação inteira

import { MyDatabaseClassic } from './db/my-database-classic';
import { MyDatabaseModule } from './db/my-database-module';
import { MyDatabaseFunction } from './db/my-database-function';

// import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';
// import { myDatabaseClassic as myDatabaseModuleFromModuleA } from './module_a';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Rafaela', age: 12 });
myDatabaseClassic.add({ name: 'Leonardo', age: 7 });
myDatabaseClassic.add({ name: 'Rafael', age: 1 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
