import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Lucas', '31A', 'Rua Antonio', 'SP');
deliveryContext(factory, 'Pedrao', '20A', 'Rua Antonio', 'SP');
deliveryContext(factory, 'Joana', '25A', 'Rua Avenida', 'SP');
deliveryContext(factory, 'Zera', '40', 'Rua B', 'Rs');
deliveryContext(factory, 'Luiz', '501', 'Rua A', 'RJ');
deliveryContext(factory, 'Lucas', '31A', 'Rua Antonio', 'SP');
deliveryContext(factory, 'Pedrao', '20A', 'Rua Antonio', 'SP');
deliveryContext(factory, 'Joana', '25A', 'Rua Avenida', 'SP');
deliveryContext(factory, 'Zera', '40', 'Rua B', 'Rs');
deliveryContext(factory, 'Luiz', '501', 'Rua A', 'RJ');
deliveryContext(factory, 'Lucas', '31A', 'Rua Antonio', 'SP');
deliveryContext(factory, 'Pedrao', '20A', 'Rua Antonio', 'SP');
deliveryContext(factory, 'Joana', '25A', 'Rua Avenida', 'SP');
deliveryContext(factory, 'Zera', '40', 'Rua B', 'Rs');
deliveryContext(factory, 'Luiz', '501', 'Rua A', 'RJ');

console.log('---');
console.log(factory.getLocation()); // mostrando que a rua ja esta salva dentro do deliveryLocation
