// import React, { useState } from 'react';
// import styles from "./Cart.module.css";
// import cartData from "./cart.json";
// import CartCard from "./CartCard";

// const Cart = () => {
//   const [cartDetails, setCartDetails] = useState(cartData);

//   const removeItem = (id) => {
//     const newItems = cartDetails.filter(item => item.id !== id);
//     setCartDetails(newItems);
//   };

//   return (
//     <div className={styles.container}>
//       {cartDetails.map((item) => (
//         <CartCard key={item.id} 
//                   data={item} 
//                   removeFunc={removeItem} />
//       ))}
//     </div>
//   );
// };

// export default Cart;



import React from 'react';
import styles from "./Cart.module.css";
import CartCard from "./CartCard";

const Cart = ({ cartDetails, removeItem }) => {
  return (
    <div className={styles.container}>
      {cartDetails.map((item, id) => (
        <CartCard key={id} data={item} removeFunc={removeItem} />
      ))}
    </div>
  );
};

export default Cart;
