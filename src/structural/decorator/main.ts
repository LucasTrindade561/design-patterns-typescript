import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductDecorator } from './product/product-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

// Decorator esta fingindo ser a tShirt, so que ele pode executar antes e depois de executar o proprio produto
const tShirt = new TShirt();
const stampedTShirt = new ProductStampDecorator(tShirt);
const stampedTShirtFrontAndBack = new ProductStampDecorator(stampedTShirt);
const customizedTShirt = new ProductCustomizationDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName()); // t shirt original - 60
console.log(stampedTShirt.getPrice(), stampedTShirt.getName()); // t shirt com estampa - 70
console.log(
  // t shirt estampada 2 vezes
  stampedTShirtFrontAndBack.getPrice(),
  stampedTShirtFrontAndBack.getName(),
);
console.log(customizedTShirt.getName(), customizedTShirt.getPrice());
