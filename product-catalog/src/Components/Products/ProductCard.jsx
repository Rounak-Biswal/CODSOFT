// import React,{useState} from 'react'
// import styles from "./ProductCard.module.css"
// import cartData from "../Cart/cart.json"
// import data from "./data.json"

// const ProductCard = ({ data: { title, image, price } }) => {

//     const [prodDetails, setProdDetails] = useState(cartData)
//     const addToCart = (id) => {
//         let newItem = cartData.reduce(item => item.id == id)
//         setCartDetails(...cartData,newItem)
//     }

//     return (
//         <div className={styles.container}>
//             <img className={styles.image} src={image} alt="" />
//             <div className={styles.title}>{title}</div>
//             <div className={styles.info}>
//                 <div className={styles.price}>${price}
//                 </div>
//                 <button className={styles.addToCart}>
//                     <i class="fa-solid fa-cart-shopping"></i>
//                     <p onClick={() => addToCart(id)}>
//                         Add To Cart
//                     </p>
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default ProductCard


import React from 'react';
import styles from "./ProductCard.module.css";

const ProductCard = ({ data: { title, image, price }, addToCart }) => {
  const item = { title, image, price };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.title}>{title}</div>
      <div className={styles.info}>
        <div className={styles.price}>${price}</div>
        <button className={styles.addToCart} onClick={() => addToCart(item)}>
          <i className="fa-solid fa-cart-shopping"></i>
          <p>Add To Cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
