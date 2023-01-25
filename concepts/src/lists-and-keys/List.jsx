// When working with a list items, we need to specify a unique key for each item
export function List({ values }) {
  const listItems1 = values.map((value, index) => {
    // The key goes into each item in the list
    return <li key={index}>{value}</li>;
  });

  const listItems2 = values.map((value, index) => {
    // If the item is a component, specify the key on the component call
    return <ListItem key={index} value={value ** 2} />;
  });

  return (
    <ul>
      {listItems1}
      {listItems2}
    </ul>
  );
}

function ListItem({ value }) {
  // There's no need to specify the key here
  return <li>{value}</li>;
}
