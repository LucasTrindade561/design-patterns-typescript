import { promises } from 'fs';
import { CustomerData } from './customer-data';
import { CustomerDataParser } from './customer-data-parser';

export class CustomerDataParserTxt extends CustomerDataParser {
  protected async parseData(): Promise<CustomerData[]> {
    const rawData = await promises.readFile(this.filePath);

    const data = rawData.toString();
    const lines = data.match(/[^\r\n]+/g);

    const customerData: CustomerData[] = [];

    // Essa verificação está errado, porém botei aqui para o sistema funcionar já que com o split, não estava funcionando
    if (lines === null) return customerData;

    for (const line of lines) {
      const [name, age, cpf] = line.split('\t');
      customerData.push({ name, age, cpf });
    }

    return customerData;
  }
}
