import './Intro.css';

const user = {
  firstName: 'Lucas',
  lastName: 'Weidas',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// The {} inside JSX is used to wrappe expressions
function Intro() {
  return (
    <div className="intro">
      <h1>Welcome, {user.fullName}</h1>
      <a href="https://github.com/lucasweidas" target={'_blank'}>
        GitHub profile
      </a>
    </div>
  );
}

export default Intro;
