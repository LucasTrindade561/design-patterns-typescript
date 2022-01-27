import { CeoBudgetHandler } from './ceo-budget-handler';
import { CustomerBudget } from './customer-budget';
import { DirectorBudgetHandler } from './director-budget-handler';
import { ManagerBudgetHandler } from './manager-budget-handler';
import { SellerBudgetHandler } from './seller-budget-handler';

const customerBudget = new CustomerBudget(1);

// A ordem importa muito, pois se vc botar o ceo no lugar do manager, vai dar erro e só o ceo que vai resolver o orçamento
const seller = new SellerBudgetHandler();
seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CeoBudgetHandler());

seller.handle(customerBudget);
console.log(customerBudget);
