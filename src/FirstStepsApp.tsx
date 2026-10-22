import { ItemCounter } from './shopping-cart/ItemCounter';

interface CartItem {
  productName: string;
  quantity: number;
}

const items: CartItem[] = [
  {productName: 'Nintendo Switch 2', quantity: 12},
  {productName: 'Pro Controller', quantity: 5},
  {productName: 'Super Smash', quantity: 10},
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de Compras</h1>

      {
        items.map(({productName, quantity}) => (<ItemCounter key={productName} item={productName} quantity={quantity} />))
      }

      {/* <ItemCounter item='Nintendo Switch 2' quantity={12} />
      <ItemCounter item='Pro Controller' quantity={5} />
      <ItemCounter item='Super Smash' quantity={10} /> */}
    </>
  );
}