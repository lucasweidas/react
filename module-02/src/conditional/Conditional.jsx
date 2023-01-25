// You can also use css modules in your JSX elements
import styles from './Conditional.module.css';

export default function Conditional() {
  const age = 20;
  const isBlue = false;
  const isAdmin = true;

  return (
    <div>
      <h1 className={styles.name}>John Smith</h1>
      <h2>{age >= 18 ? 'Over age' : 'Under age'}</h2>
      <p style={{ backgroundColor: isBlue ? 'blue' : 'red' }}>test@email.com</p>
      {isAdmin && <button>Click me</button>}
    </div>
  );
}
