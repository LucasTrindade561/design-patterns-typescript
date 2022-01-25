import { OrderApproved } from './order-approved';
import { OrderPending } from './order-pending';
import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

// ESSA REGRA NAO EXISTE NO MERCADO, POIS TODO O ECOMMERCE QUER VENDER.
// SE FOSSE DE VERDADE, O ECOMMERCE DARIA UMA NOVA OPÇÃO PARA O PAGAMENTO.

export class OrderReject implements ShoppingOrderState {
  private name = 'OrderReject';
  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Cannot approve your payment, because the order was reject.');
  }

  rejectPayment(): void {
    console.log('Cannot reject your payment, because it already rejected.');
  }

  waitPayment(): void {
    console.log(
      'Cannot move your payment to pending state, because the order was reject.',
    );
  }

  shipOrder(): void {
    console.log('I cannot send a order with payment rejected.');
  }
}
