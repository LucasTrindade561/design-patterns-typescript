import { TaxVisitorProtocol } from './tax-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class AlcoholicDrink extends VisitableProduct {
  constructor(protected _price: number) {
    super('AlcoholicDrink', _price);
  }
  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxForAlcoholicDrink(this);
  }
}
