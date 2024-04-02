import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";



export default function ProductTable({ products, filterText }) {
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
           
           </tr>
         </h1>
         <li>{rows}</li>
       </ul>
     );
   }
   