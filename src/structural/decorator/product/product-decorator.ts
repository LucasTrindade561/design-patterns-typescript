import { IProduct } from './product-protocol';

export class ProductDecorator implements IProduct {
  // Pegando o product(aqui no caso a t shirt), e agr consegue criar o concrete decorator.
  // Estamos apenas copiando os codigos de dentro da t shirt.
  constructor(protected product: IProduct) {}

  getPrice(): number {
    return this.product.getPrice();
  }

  getName(): string {
    return this.product.getName();
  }
}
