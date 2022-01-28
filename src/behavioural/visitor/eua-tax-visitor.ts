import { AlcoholicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { TaxVisitorProtocol } from './tax-visitor-protocol';

export class EuaTaxVisitor implements TaxVisitorProtocol {
  calculateTaxForFood(food: Food): number {
    return food.price + food.price * 0.2;
  }

  calculateTaxForCigarette(cigarette: Cigarette): number {
    return cigarette.price + cigarette.price * 1;
  }

  calculateTaxForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.price + alcoholicDrink.price * 0.3;
  }
}
