import { useState } from 'react';

const contacts = [
  { id: 0, name: 'John', email: 'john@mail.com' },
  { id: 1, name: 'Lucy', email: 'lucy@mail.com' },
  { id: 2, name: 'Martin', email: 'martin@mail.com' },
];
let msgIdCount = 0;

export default function Example() {
  const [recipientId, setRecipientId] = useState(0);
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const [previousInputs, setPreviousInputs] = useState([]);
  const previousInput = id => {
    return previousInputs.find(({ contactId }) => contactId === id);
  };

  return (
    <div style={{ display: 'flex' }}>
      <ContactList
        contacts={contacts}
        onSelect={id => {
          if (id === recipientId) return;
          setRecipientId(id);

          if (previousInput(recipientId)) {
            setPreviousInputs(
              previousInputs.map(input => {
                return input.contactId === recipientId ? { ...input, text } : input;
              })
            );
          } else if (text.trim() !== '') {
            setPreviousInputs([...previousInputs, { contactId: recipientId, text }]);
          }

          setText(previousInput(id)?.text ?? '');
        }}
      />
      <Chat
        key={recipientId}
        {...contacts.find(({ id }) => id === recipientId)}
        onSend={message => {
          setMessages([...messages, { ...message }]);
          setPreviousInputs(
            previousInputs.filter(input => {
              return input.contactId !== message.contactId;
            })
          );
          setText('');
        }}
        text={text}
        onTextChange={value => setText(value)}
      />
      <MessageList messages={messages} contacts={contacts} />
    </div>
  );
}

function ContactList({ contacts, onSelect }) {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name }) => {
          return (
            <li key={id}>
              <button onClick={() => onSelect(id)}>{name}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Chat({ id, name, email, onSend, text, onTextChange }) {
  return (
    <div>
      <textarea cols="30" rows="10" placeholder={`Chat to ${name}`} value={text} onChange={({ target }) => onTextChange(target.value)}></textarea>
      <br />
      <button
        onClick={() => {
          onSend({ id: msgIdCount++, text, contactId: id });
        }}
      >
        Send to {email}
      </button>
    </div>
  );
}

function MessageList({ messages, contacts }) {
  return (
    <>
      {messages.length > 0 && (
        <div>
          <ul>
            {messages.map(({ id, text, contactId }) => {
              return (
                <li key={id}>
                  {text} (<strong>to</strong> {contacts[contactId].email})
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
