export default function ProductRow({ product }) {
     const name = product.length ? product.name :
       <span style={{ color: 'red' }}>
         {product.name} { product.price} { product.category}
       </span>;
   
     return (
       <tr>
         <td>{name}</td>
         <td>{product.price}</td>
       </tr>
     );
   }

   