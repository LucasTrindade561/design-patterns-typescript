import { MyDefaultIterator } from './my-default-iterator';
import { MyIteratorProtocol } from './my-iterator-protocol';

// Nao vai ter a interface, pois so vamos ter essa estrutura de dados, mas caso queira adicionar um collection em outros lugares, voce deve adicionar a interface
export class MyDataStructure {
  private _items: string[] = [];
  private iterator: MyIteratorProtocol<string> = new MyDefaultIterator(this);

  addItems(...items: string[]): void {
    items.forEach((item) => this._items.push(item));
  }

  get items(): string[] {
    return this._items;
  }

  size(): number {
    return this.items.length;
  }

  changeIterator(iterator: MyIteratorProtocol<string>): void {
    this.iterator = iterator;
  }

  // Esse e o make iterator do diagrama
  [Symbol.iterator](): MyIteratorProtocol<string> {
    return this.iterator;
  }

  /* se nao botamos o reset, o index nao é zerado,
  fazendo que quando vc chame outra vez o iterator,
  ele não deja nada ou apenas os index que faltam */
  reset(): void {
    this.iterator.reset();
  }
}
