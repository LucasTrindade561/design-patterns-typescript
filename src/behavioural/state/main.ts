import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder();
order.approvePayment(); // aprovado
order.waitPayment(); // pendente
order.shipOrder();
order.rejectPayment(); // daqui nao altera mais o estado
order.waitPayment(); // n
order.approvePayment(); // n
order.waitPayment(); // n
order.shipOrder(); // n
