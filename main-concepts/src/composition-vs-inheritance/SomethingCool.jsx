import { useState } from 'react';

export function SomethingCool() {
  return (
    <div>
      <Fieldset legend="Name" borderColor="hsl(100, 100%, 70%)">
        <input type="text" />
      </Fieldset>
      <Fieldset legend="Favorite fruit" borderColor="hsl(200, 100%, 70%)">
        <Select />
      </Fieldset>
    </div>
  );
}

function Fieldset({ legend, children, borderColor }) {
  return (
    <fieldset style={{ borderColor }}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}

function Select() {
  const [selectValue, eetSelectValue] = useState('grape');
  const handleChange = ({ target }) => eetSelectValue(target.value);

  return (
    <select value={selectValue} onChange={handleChange}>
      <option value="mango">Mango</option>
      <option value="grape">Grape</option>
      <option value="orange">Orange</option>
      <option value="banana">Banana</option>
    </select>
  );
}
