import { useState } from 'react';
import PRODUCTS from './products.json';

export function FilterableProductTable() {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filterText, setFilterText] = useState('');

  return (
    <div>
      <SearchBar filterText={filterText} setFilterText={setFilterText} inStockOnly={inStockOnly} setInStockOnly={setInStockOnly} />
      <ProductTable products={PRODUCTS} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  );
}

function SearchBar({ filterText, setFilterText, inStockOnly, setInStockOnly }) {
  const handleSearchChange = ({ target }) => setFilterText(target.value);
  const handleCheckboxChange = () => setInStockOnly(!inStockOnly);

  return (
    <div>
      <input type="search" name="" id="" placeholder="Search..." value={filterText} onChange={handleSearchChange} />
      <label>
        <input type="checkbox" name="" id="" value={inStockOnly} onChange={handleCheckboxChange} />
        <span>Only show products in stock</span>
      </label>
    </div>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const filterSearch = filterText.toLowerCase().trim();
  const rows = getProductRows(products, filterSearch, inStockOnly);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ name, price, stocked }) {
  return (
    <tr>
      <td style={{ color: stocked ? 'initial' : 'red' }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

function getProductRows(products, filterSearch, inStockOnly) {
  const search = new RegExp(`^${filterSearch}`);
  let key = 0;
  let lastCategory = '';

  return products.reduce((rows, { category, name, price, stocked }) => {
    if (inStockOnly && !stocked) return rows;

    const matches = name.toLowerCase().match(search);
    if (!matches) return rows;

    if (category !== lastCategory) {
      rows.push(<ProductCategoryRow key={key++} category={category} />);
    }

    rows.push(<ProductRow key={key++} name={name} price={price} stocked={stocked} />);

    lastCategory = category;
    return rows;
  }, []);
}
