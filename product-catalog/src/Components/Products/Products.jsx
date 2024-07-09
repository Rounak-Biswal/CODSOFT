// import React from 'react'
// import data from "./data.json"
// import ProductCard from './ProductCard'
// import styles from "./Products.module.css"

// const Products = () => {
//   return (
//     <div className={styles.container}>
//       {data.map((data,id) => {
//         return(
//             <ProductCard key={id} data={data}/>
//         )
//       })}
//     </div>
//   )
// }

// export default Products


import React from 'react';
import data from "./data.json";
import ProductCard from './ProductCard';
import styles from "./Products.module.css";

const Products = ({ addToCart }) => {
  return (
    <div className={styles.container}>
      {data.map((item, id) => (
        <ProductCard key={id} data={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
