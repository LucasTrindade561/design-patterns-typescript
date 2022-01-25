import { OrderPending } from './order-pending';
import { OrderReject } from './order-reject';

import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderApproved implements ShoppingOrderState {
  private name = 'OrderApproved';
  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('The order is already in state payment approved.');
  }

  rejectPayment(): void {
    this.order.setState(new OrderReject(this.order));
  }

  waitPayment(): void {
    this.order.setState(new OrderPending(this.order));
  }

  shipOrder(): void {
    console.log('Sending the order to costumer...');
  }
}
