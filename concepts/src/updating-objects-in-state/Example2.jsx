import { useState } from 'react';

// Updating a property inside an object state
export default function Example() {
  const [person, setPerson] = useState({ name: '', age: '', email: '' });
  const handleChange = ({ target }) => {
    setPerson({ ...person, [target.name]: target.value });
  };

  return (
    <div>
      <label>
        Name:
        <input type="text" name="name" value={person.name} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="text" name="age" value={person.age} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={person.email} onChange={handleChange} />
      </label>
      <p>
        {person.name} {person.age} {person.email}
      </p>
    </div>
  );
}
