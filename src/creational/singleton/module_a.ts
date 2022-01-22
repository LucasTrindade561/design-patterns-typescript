// import { MyDatabaseClassic } from './db/my-database-classic';
import { MyDatabaseModule } from './db/my-database-module';
import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Lucas', age: 17 });
myDatabaseClassic.add({ name: 'Rodrigo', age: 32 });
myDatabaseClassic.add({ name: 'Cristiano', age: 45 });

export { myDatabaseClassic };
