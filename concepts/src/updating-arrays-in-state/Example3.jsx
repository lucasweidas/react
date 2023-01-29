import { useState } from 'react';

let idCount = 3;

export default function Example() {
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([
    { id: 0, product: 'Chocolate', price: 10 },
    { id: 1, product: 'Bread', price: 12 },
    { id: 2, product: 'Cookie', price: 8 },
  ]);
  const handleSubmit = e => {
    e.preventDefault();
    setProducts([...products, { id: idCount++, product, price }]);
  };
  const handleChange = ({ target }) => {
    if (target.name === 'product') {
      setProduct(target.value);
    } else {
      setPrice(target.value);
    }
  };
  const handleSort = ({ target }) => {
    // First create a copy of the original array and then mutate the copy
    const nextList = [...products];

    if (target.id === 'sort-product') {
      nextList.sort((a, b) => a.product.localeCompare(b.product));
    } else {
      nextList.sort((a, b) => a.price - b.price);
    }
    setProducts(nextList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Product:
          <input type="text" name="product" value={product} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="text" name="price" value={price} onChange={handleChange} />
        </label>
        <button type="submit">Add product</button>
      </form>
      <button id="sort-product" onClick={handleSort}>
        Sort by name
      </button>
      <button id="sort-price" onClick={handleSort}>
        Sort by price
      </button>
      <ul>
        {products.map(({ id, product, price }) => {
          return (
            <li key={id}>
              {product} ${price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
