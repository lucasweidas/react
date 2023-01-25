import './App.css';
import Job from './Job.jsx';

// A jsx component has its first letter capitalized
function App() {
  return (
    <div className="App">
      <User {...getUser(1)} />
      <User name="Kelly" age={27} email="kelly@example.com" />
      <User {...getUser(0)} />
      <Job salary={15600} position="Junior SDE" company="Amazon" />
      <Job salary={22500} position="Senior SDE" company="Microsoft" />
    </div>
  );
}

// Every component has a parameter called "props", which is an object
function User(props) {
  return (
    <div>
      <h1>User: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h2>Email: {props.email}</h2>
    </div>
  );
}

function getUser(id) {
  const users = [
    { name: 'John', age: 25, email: 'john@example.com' },
    { name: 'Julian', age: 30, email: 'julian@example.com' },
  ];
  return users[id];
}

export default App;
