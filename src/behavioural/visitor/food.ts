import { TaxVisitorProtocol } from './tax-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class Food extends VisitableProduct {
  constructor(protected _price: number) {
    super('Food', _price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxForFood(this);
  }
}
