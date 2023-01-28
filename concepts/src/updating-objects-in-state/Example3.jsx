import { useState } from 'react';
import updateState from './updateState.js';

// Updating nested objects in state
export default function Example() {
  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Smith',
    location: {
      city: 'London',
      country: 'United Kingdom',
    },
    pets: ['Black', 'Lion', 'Sam', 'Nina'],
  });
  const handleComplexChange = ({ target }) => {
    setPerson(updateState(person, target.name, target.value));
  };

  return (
    <Form>
      <Input name="firstName" value={person.firstName} onChange={handleComplexChange}>
        First name:
      </Input>
      <Input name="lastName" value={person.lastName} onChange={handleComplexChange}>
        Last name:
      </Input>
      <Input name="city" value={person.location.city} onChange={handleComplexChange}>
        City:
      </Input>
      <Input name="country" value={person.location.country} onChange={handleComplexChange}>
        Country:
      </Input>
      <p>
        {person.firstName} {person.lastName} ({person.location.city}, {person.location.country})
      </p>
    </Form>
  );
}

export function Form({ children }) {
  return (
    <div style={{ display: 'grid' }}>
      {children}
      <img src="https://randomuser.me/api/portraits/men/60.jpg" alt="" />
    </div>
  );
}

export function Input({ children, name, value, onChange }) {
  return (
    <label>
      {children}
      <input type="text" name={name} value={value} onChange={onChange} />
    </label>
  );
}
