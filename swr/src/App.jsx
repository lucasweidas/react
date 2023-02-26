import './App.css';
import useSWR from 'swr';
import { createContext, useContext, useState } from 'react';

function App() {
  return (
    <div className="App">
      <UserIdProvider>
        <Navbar />
        <MainContent />
        <ChangeUser />
      </UserIdProvider>
    </div>
  );
}

function UserIdProvider({ children }) {
  const [id, setId] = useState(1);

  return (
    <UserIdContext.Provider
      value={{
        userId: id,
        onChange(id) {
          setId(id);
        },
      }}
    >
      {children}
    </UserIdContext.Provider>
  );
}

function Navbar() {
  return (
    <nav>
      <p>Hello world</p>
      <Avatar />
    </nav>
  );
}

function MainContent() {
  const { userId } = useUserId();
  const { user, isError, isLoading } = useUser(userId);

  if (isError) return <Error reason={isError} />;
  if (isLoading) return <Spinner />;

  return (
    <main>
      <p>{getFullName(user)}</p>
    </main>
  );
}

function ChangeUser() {
  const { userId, onChange } = useUserId();

  function handleClick({ target }) {
    if (target.id === 'previous') {
      onChange(userId === 1 ? 12 : userId - 1);
    } else if (target.id === 'next') {
      onChange(userId === 12 ? 1 : userId + 1);
    }
  }

  return (
    <div>
      <button id="previous" onClick={handleClick}>
        Previous
      </button>
      <button id="next" onClick={handleClick}>
        Next
      </button>
    </div>
  );
}

function Avatar() {
  const { userId } = useUserId();
  const { user, isError, isLoading } = useUser(userId);

  if (isError) return <Error reason={isError} />;
  if (isLoading) return <Spinner />;

  return <img src={user.avatar} alt={getFullName(user)} />;
}

function Error() {
  return <p className="error">Oops! Something went wrong.</p>;
}

function Spinner() {
  return <div className="spinner"></div>;
}

async function fetcher(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw `An error occurred: ${response.status}`;
  }

  const result = await response.json();
  return result.data;
}

function useUser(id) {
  const { data, error, isLoading } = useSWR(`https://reqres.in/api/users/${id}`, fetcher);

  return {
    user: data,
    isError: error,
    isLoading,
  };
}

function useUserId() {
  return useContext(UserIdContext);
}

function getFullName(user) {
  return `${user.first_name} ${user.last_name}`;
}

const UserIdContext = createContext(1);

export default App;
