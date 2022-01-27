import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

export class CeoBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    console.log('The CEO treats any budget.');
    budget.approved = true;
    return budget;
  }
}
