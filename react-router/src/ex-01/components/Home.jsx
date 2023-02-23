import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/media">media</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </div>
  );
}
