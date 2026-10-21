import { ItemCounter } from './shopping-cart/ItemCounter';

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de Compras</h1>

      <ItemCounter item='Nintendo Switch 2' quantity={12} />
      <ItemCounter item='Pro Controller' quantity={5} />
      <ItemCounter item='Super Smash' quantity={10} />
    </>
  );
}