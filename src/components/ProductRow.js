export default function ProductRow({ product }) {
     const name = product.length ? product.name :
       <span style={{ color: 'red' }}>
         {product.name} { product.price} { product.stocked} { product.category}
       </span>;
   
     return (
       <>
         <p>{name}</p>

       </>
     );
   }

   