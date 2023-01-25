import User from './User.jsx';

export function SimpleList() {
  const names = ['Lucas', 'Julia', 'Max', 'Luiz', 'Camila'];
  const items = names.map((name, key) => <li key={key}>{name}</li>);
  return <ul>{items}</ul>;
}

export function MediumList() {
  const users = [
    { name: 'Lucas', age: 23 },
    { name: 'Julia', age: 25 },
    { name: 'John', age: 30 },
  ];

  return (
    <div>
      {...users.map(({ name, age }) => {
        return <User name={name} age={age} />;
      })}
    </div>
  );
}

export function PlanetList() {
  const planets = [
    { name: 'Mars', isGasPlanet: false },
    { name: 'Earth', isGasPlanet: false },
    { name: 'Jupiter', isGasPlanet: true },
    { name: 'Venus', isGasPlanet: false },
    { name: 'Neptune', isGasPlanet: true },
    { name: 'Uranus', isGasPlanet: true },
  ];

  return (
    <div>
      <h2>Gas Planets</h2>
      <ul>
        {...planets.reduce((acc, { name, isGasPlanet }) => {
          isGasPlanet && acc.push(<li>{name}</li>);
          return acc;
        }, [])}
      </ul>
    </div>
  );
}
