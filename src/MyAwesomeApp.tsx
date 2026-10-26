import type { CSSProperties } from "react";

const firstName = 'Cristhian';
const lastName = 'Garcia';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isActive = false;

const address = {
  zipCode: '111811',
  country: 'Bogotá'
};

const myStyles: CSSProperties = {
  backgroundColor: isActive ? 'lightGreen' : 'pink',
  borderRadius: 10,
  padding: 10,
}

export const MyAwesomeApp = () => {
  return (
    <div data-testid="div-app">
      <h1 data-testid="first-name"> {firstName} </h1>
      <h3> {lastName} </h3>

      <p className='favorites'> {favoriteGames.join(',')} </p>
      <p>{2 + 2}</p>

      <p>{isActive ? 'Activo' : 'No Activo'}</p>

      <p style={myStyles}>
        {JSON.stringify(address)}
      </p>
    </div>
  );
}