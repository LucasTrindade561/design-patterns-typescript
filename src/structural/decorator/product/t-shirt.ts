import { IProduct } from './product-protocol';

export class TShirt implements IProduct {
  private name = 'T Shirt';
  private price = 60;

  getPrice(): number {
    return this.price;
  }

  getName(): string {
    return this.name;
  }
}
