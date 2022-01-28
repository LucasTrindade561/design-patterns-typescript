import { AlcoholicDrink } from './alcoholic-drink';
import { BrazilTaxVisitor } from './brazil-tax-visitor';
import { Cigarette } from './cigarette';
import { EuaTaxVisitor } from './eua-tax-visitor';
import { Food } from './food';

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(5);

const brazilTaxVisitor = new BrazilTaxVisitor();
const euaTaxVisitor = new EuaTaxVisitor();

const cart = [food, cigarette, alcoholicDrink];
const total = cart.reduce((sum, item) => item.price + sum, 0);
const totalWithTaxesBrazil = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
  0,
);
const totalWithTaxesEua = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(euaTaxVisitor) + sum,
  0,
);
console.log(totalWithTaxesBrazil);
console.log(total);
console.log(totalWithTaxesEua);
