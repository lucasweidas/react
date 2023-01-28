import { useImmer } from 'use-immer';
import { Form, Input } from './Example3.jsx';

// updating nested objects in state with the "useImmer" library
export default function Example() {
  const [person, updatePerson] = useImmer({
    name: 'John',
    location: {
      city: 'London',
      country: 'United Kingdom',
    },
  });
  const handleChange = ({ target }) => {
    updatePerson(draft => {
      draft[target.name] = target.value;
    });
  };
  const handleLocationChange = ({ target }) => {
    updatePerson(draft => {
      draft.location[target.name] = target.value;
    });
  };

  return (
    <Form person={person}>
      <Input name="name" value={person.name} onChange={handleChange}>
        Name:
      </Input>
      <Input name="city" value={person.location.city} onChange={handleLocationChange}>
        City:
      </Input>
      <Input name="country" value={person.location.country} onChange={handleLocationChange}>
        Country:
      </Input>
      <p>
        {person.name} ({person.location.city}, {person.location.country})
      </p>
    </Form>
  );
}
