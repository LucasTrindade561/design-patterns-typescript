import { TaxVisitorProtocol } from './tax-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class Cigarette extends VisitableProduct {
  constructor(protected _price: number) {
    super('Cigarette', _price);
  }
  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxForCigarette(this);
  }
}
