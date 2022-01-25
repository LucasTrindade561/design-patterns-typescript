import { OrderApproved } from './order-approved';
import { OrderReject } from './order-reject';
import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderPending implements ShoppingOrderState {
  private name = 'OrderPending';
  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new OrderReject(this.order));
  }

  waitPayment(): void {
    console.log('The order is already in state order pending.');
  }

  shipOrder(): void {
    console.log(`Can't send the order with pending payment.`);
  }
}
