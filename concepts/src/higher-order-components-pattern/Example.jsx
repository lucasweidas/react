import { useEffect, useRef, useState } from 'react';

export default function Example() {
  const { data, isFetching } = useFetchData('https://reqres.in/api/users/2');

  return <div>{<User data={data} isFetching={isFetching} />}</div>;
}

const User = withFetchStatus(BaseUser);

function BaseUser({ first_name, last_name, avatar }) {
  const fullName = `${first_name} ${last_name}`;

  return (
    <div>
      <p>Full Name: {fullName}</p>
      <img src={avatar} alt={fullName} />
    </div>
  );
}

function withFetchStatus(Component) {
  return props => {
    if (props.isFetching) {
      return <p>Fetching data...</p>;
    }
    if (props.data === null) {
      return <p>Data not loaded yet!</p>;
    }
    return <Component {...props.data} />;
  };
}

function useFetchData(url) {
  const [data, setData] = useState(null);
  const isFetching = useRef(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw 'Something went wrong';
        }
        const result = await response.json();
        setData(result.data);
      } catch (e) {
        console.error(e);
      }
      isFetching.current = false;
    }

    fetchData();
    return () => {
      controller.abort();
      isFetching.current = false;
    };
  }, [url]);

  return { data, isFetching: isFetching.current };
}
