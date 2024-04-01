import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
return (
    <div>
      <SearchBar 
        filterText={filterText} 
        onFilterTextChange={setFilterText} />
      <ProductTable 
        products={products} 
        filterText={filterText}
         />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.length ? product.name :
    <span style={{ color: 'red' }}>
      {product.name} { product.price} { product.stocked} { product.category}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <ul>
      <h1>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </h1>
      <li>{rows}</li>
    </ul>
  );
}

function SearchBar({
  haikus,
  filterText,

  onFilterTextChange
}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />

    </form>
  );
}

const PRODUCTS = [
  {
    category: "Laura",
    price: "Starting tomorrow,",
    stocked: "We write price haiku a day,",
    name: "Share and celebrate!"
},
{
    category: "Laura",
    price: "Tomorrow we write.",
    stocked: "Small sketches of whatever",
    name: "inspires, amuses."
},
{
    category: "Paul",
    price: "I didn't learn how",
    stocked: "to write a proper haiku",
    name: "but I can read them"
},

{
    category: "Laura",
    price: "You're so funny and",
    stocked: "I feel so dumb. Whoops! I say,",
    name: "I am a big fool!"
},
{
    category: "Leah",
    price: "I'm in the bathroom",
    stocked: "And remember: Haiku Day!",
    name: "Good Morning my friends."
},
{
    category: "Chris",
    price: "Did Bob. 3 new words. ",
    stocked: "Giggle mug. Morbs. Tickety ",
    name: "boo. Boo, I see you. "
},
{
    category: "Laura",
    price: "March. Birds make their nest:",
    stocked: "sticks, vines in the kitchen eaves.",
    name: "Busy! Welcome back."
},
{
    category: "Paul",
    price: "Yesterday the sun",
    stocked: "Sparkled from diamond edges",
    name: "Much softer today"
},
{
    category: "Claire",
    price: "Outside my window",
    stocked: "Pink flowers slowly open ",
    name: "Blooming just for me 🌸🌞"
},
{
    category: "Leah",
    price: "Today is the day",
    stocked: "My job will be decided",
    name: "By the SCOTUS folks"
},
{
    category: "Laura",
    price: "Challah loaf, size and",
    stocked: "heft of a chubby toddler.",
    name: "We can’t finish it."
},
{
    category: "Chris",
    price: "Leah's summer starts",
    stocked: "The murders over. Thank god.",
    name: "Let the games begin."
},
{
    category: "Paul",
    price: "Yall start too early",
    stocked: "Poetry needs more dreaming",
    name: "Its called beauty sleep"
},


  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function Search() {
  return <FilterableProductTable products={PRODUCTS} />;
}
