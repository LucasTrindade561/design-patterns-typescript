import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

export class ManagerBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 30000) {
      console.log('The manager treated the budget.');
      budget.approved = true;
      return budget;
    }

    return super.handle(budget);
  }
}
