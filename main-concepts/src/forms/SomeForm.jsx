import { useState } from 'react';

export function SomeForm() {
  const [nameValue, setNameValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [selectValue, setSelectValue] = useState('grape');
  const [isShown, setIsShown] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Name: ${nameValue}\nText: ${textValue}\nSelected: ${selectValue}\nPassword: ${passwordValue}`);
  };
  const handleNameChange = ({ target }) => setNameValue(target.value);
  const handleTextChange = ({ target }) => setTextValue(target.value);
  const handlePasswordChange = ({ target }) => {
    if (target.name === 'password') {
      return void setPasswordValue(target.value);
    }
    setIsShown(target.checked);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', justifyItems: 'flex-start' }}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={nameValue} onChange={handleNameChange} />
      <label htmlFor="textarea">Message</label>
      <textarea id="textarea" rows={3} value={textValue} onChange={handleTextChange}></textarea>
      <SelectInput selectValue={selectValue} setSelectValue={setSelectValue} />
      <label htmlFor="password">Password</label>
      <input type={isShown ? 'text' : 'password'} name="password" id="password" value={passwordValue} onChange={handlePasswordChange} />
      <label>
        <input type="checkbox" name="showPassword" value={isShown} onChange={handlePasswordChange} />
        Show password
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

function SelectInput({ selectValue, setSelectValue }) {
  const handleSelectChange = ({ target }) => setSelectValue(target.value);

  return (
    <>
      <label htmlFor="select">Favorite fruit</label>
      <select id="select" value={selectValue} onChange={handleSelectChange}>
        <option value="banana">Banana</option>
        <option value="grape">Grape</option>
        <option value="mango">Mango</option>
        <option value="orange">Orange</option>
      </select>
    </>
  );
}
