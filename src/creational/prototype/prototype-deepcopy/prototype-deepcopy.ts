export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public address: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.address = this.address.map((item) => item.clone()); // Isso é uma copia do endereço original
    return newObj;
  }

  addAddress(address: Address): void {
    this.address.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address('Rua Bagé', 315);
const person1 = new Person('Lucas', 17);
person1.addAddress(address1);
const person2 = person1.clone();

// Vai mudar o endereço para o clone tambem, e isso nao é uma prática desejada, muitas vezes
// Para não ocorrer isso, nós copiamos o endereço também e agr só vai mudar no person1 o endereço.
person1.address[0].street = 'Av Brasil';

// Aqui agr esta aparecendo camila, pois o prototype esta fazendo sombra na chave do person1, ou seja, o name camila esta assumindo o name agr
person2.name = 'Camila';
// person2.address[0].street = 'Rua Feliz';
console.log(person2);
console.log(person2.address);

console.log('#####');

console.log(person1);
console.log(person1.address);
