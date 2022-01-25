import { OrderPending } from './order-pending';
import { ShoppingOrderState } from './shopping-order-state';

export class ShoppingOrder {
  private state: ShoppingOrderState = new OrderPending(this);

  getState(): ShoppingOrderState {
    return this.state;
  }

  setState(state: ShoppingOrderState): void {
    this.state = state;
    console.log(`The state of order is now ${this.getStateName()}`);
  }

  getStateName(): string {
    return this.state.getName();
  }

  // a partir daqui é um if praticamente
  approvePayment(): void {
    this.state.approvePayment();
  }
  rejectPayment(): void {
    this.state.rejectPayment();
  }
  waitPayment(): void {
    this.state.waitPayment();
  }
  shipOrder(): void {
    this.state.shipOrder();
  }
}
