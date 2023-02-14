import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export default function Example() {
  const [list, setList] = useState(initialList);
  const [text, setText] = useState('');
  const parentInputRef = useRef();
  const parentListRef = useRef();
  const handleChange = ({ target }) => setText(target.value);
  const handleSubmit = e => {
    e.preventDefault();
    flushSync(() => {
      setText('');
      setList([...list, text]);
    });
    parentInputRef.current.focus();
    parentListRef.current.scrollToBottom();
  };

  return (
    <div>
      <AddTask ref={parentInputRef} text={text} onChange={handleChange} onSubmit={handleSubmit} />
      <List ref={parentListRef} list={list} />
    </div>
  );
}

const AddTask = forwardRef(function AddTask({ text, onChange, onSubmit }, ref) {
  const inputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
    };
  });

  return (
    <form onSubmit={onSubmit}>
      <label>
        Task:
        <input type="text" ref={inputRef} value={text} onChange={onChange} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
});

const List = forwardRef(function List({ list }, ref) {
  const listRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      scrollToBottom() {
        const node = listRef.current;
        node.scrollTop = node.scrollHeight;
      },
    };
  });

  return (
    <ul ref={listRef} style={{ maxHeight: 100, overflow: 'scroll' }}>
      {list.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
});

const initialList = ['hello', 'hi', 'world', 'fruit', 'car', 'beach', 'house', 'food'];
