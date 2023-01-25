import { useState } from 'react';

export function LengthConverter() {
  const [length, setLength] = useState({ unit: 'mi', value: '' });
  const handleMileChange = ({ target }) => {
    setLength({ unit: 'mi', value: target.value });
  };
  const handleKilometerChange = ({ target }) => {
    setLength({ unit: 'km', value: target.value });
  };
  const { value, unit } = length;
  const mile = getLength('mi', unit, value);
  const kilometer = getLength('km', unit, value);
  const from = unit === 'mi' ? mile : kilometer;
  const to = unit === 'mi' ? kilometer : mile;

  return (
    <div>
      Convert mile to kilometer and vice versa.
      <LengthInput legend="Mile" value={mile.value} handleChange={handleMileChange} />
      <LengthInput legend="Kilometer" value={kilometer.value} handleChange={handleKilometerChange} />
      {from.value && to.value && <Result from={from} to={to} />}
    </div>
  );
}

function LengthInput({ legend, value, handleChange }) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <input type="text" value={value} onChange={handleChange} />
    </fieldset>
  );
}

function Result({ from, to }) {
  return <p>Result: {`${from.value} ${from.unit} = ${to.value} ${to.unit}`}</p>;
}

function convertTo(value, unit) {
  if (value.trim().length === 0) return '';
  const UNITS = { mi: 0.6213711922, km: 1.609344 };
  const output = value * UNITS[unit];
  return isNaN(output) ? '' : output.toString();
}

function getLength(unit, activeUnit, value) {
  const length = { unit };
  length.value = unit === activeUnit ? value : convertTo(value, unit);
  return length;
}
