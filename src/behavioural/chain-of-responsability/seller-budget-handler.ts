import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

export class SellerBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 7500) {
      console.log('The seller treated the budget.');
      budget.approved = true;
      return budget;
    }

    // Aqui esta mandando a classe base fazer toda a verificação, se tem
    // proximo ou se vai acabar na requisição
    return super.handle(budget);
  }
}
