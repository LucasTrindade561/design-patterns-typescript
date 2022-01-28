import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItems('A', 'B', 'C', 'D', 'E');

const [a, b] = dataStructure;

console.log('Stolen:', a, b);
console.log('I Executed a lot things and after i have used the iterator');
const [c, ...rest] = dataStructure;
console.log(c, rest);
console.log('---');

dataStructure.reset();
for (const data of dataStructure) {
  console.log(data);
}

console.log('---');
dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}

console.log('---');

// precisa resetar aqui para que funcione
dataStructure.reset();
for (const data of dataStructure) {
  console.log(data);
}

// console.log('There is no value.');
// for (const data of dataStructure) {
//   console.log(data);
// }
