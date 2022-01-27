import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

// Quem faz a comunicação é apenas o mediator e aqui podemos ver visivelmente isso

const mediator = new Mediator();
const seller1 = new Seller();
seller1.addProduct({ id: '1', name: 'T Shirt', price: 50 });
seller1.addProduct({ id: '2', name: 'Pants', price: 50 });

const seller2 = new Seller();
seller2.addProduct({ id: '3', name: 'Car', price: 75000 });
seller2.addProduct({ id: '4', name: 'Tire', price: 1000 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('3');
buyer.buy('4');
buyer.viewProducts();

// Caso tivessemos apenas colleague de seller
// seller2.viewProducts();
// seller2.buy('3');
// seller2.buy('4');
// seller2.viewProducts();
