export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public address: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.address.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address('Rua Bagé', 315);
const person1 = new Person('Lucas', 17);
person1.addAddress(address1);
const person2 = person1.clone();

// Vai mudar o endereço para o clone tambem, e isso nao é uma prática desejada, muitas vezes
person1.address[0].street = 'Av Brasil';

// Aqui agr esta aparecendo camila, pois o prototype esta fazendo sombra na chave do person1, ou seja, o name camila esta assumindo o name agr
person2.name = 'Camila';
console.log(person2);
console.log(person2.address);
