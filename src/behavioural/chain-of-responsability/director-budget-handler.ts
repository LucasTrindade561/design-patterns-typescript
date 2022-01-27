import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

export class DirectorBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 70000) {
      console.log('The director treated the budget.');
      budget.approved = true;
      return budget;
    }

    return super.handle(budget);
  }
}
