import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function Music() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Music</h2>
      <button
        onClick={() => {
          navigate('/pop', { state: 'Hello World' });
        }}
      >
        Pop
      </button>
      <Link to="/edm" state={'9384'}>
        Eletronic Dance Music
      </Link>
    </div>
  );
}

export function Pop() {
  const location = useLocation();

  return (
    <div>
      <h3>Music name: {location.state}</h3>
    </div>
  );
}

export function Edm() {
  const location = useLocation();

  return (
    <div>
      <h3>Total views: {location.state}</h3>
    </div>
  );
}
