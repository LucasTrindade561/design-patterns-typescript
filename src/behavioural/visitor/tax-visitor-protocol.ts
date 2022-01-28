import { AlcoholicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';

export interface TaxVisitorProtocol {
  calculateTaxForFood(f: Food): number;
  calculateTaxForCigarette(c: Cigarette): number;
  calculateTaxForAlcoholicDrink(a: AlcoholicDrink): number;
}
