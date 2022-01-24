import { DeliveryLocation } from './delivery-location';

export type DeliveryLocationData = {
  readonly street: string;
  readonly city: string;
};

// Estamos dizendo que locations vai ser um objeto, com chave string e o dado é o DeliveryLocation
// A chave vai ser uma especie de id para vermos se existe a location já.
export type DeliveryLocationDictionary = { [k: string]: DeliveryLocation };
