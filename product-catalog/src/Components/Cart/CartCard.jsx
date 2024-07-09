// import React from 'react';
// import styles from "./CartCard.module.css";

// const CartCard = ({ data: { id, title, image, price }, removeFunc }) => {
//   return (
//     <div className={styles.container}>
//       <img className={styles.image} src={image} alt={title} />
//       <div className={styles.title}>{title}</div>
//       <div className={styles.action}>
//         <p className={styles.price}>${price}</p>
//         <div className={styles.removeBtn} onClick={() => removeFunc(id)}>
//           <i className="fa-solid fa-trash"></i>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartCard;


import React from 'react';
import styles from "./CartCard.module.css";

const CartCard = ({ data: { id, title, image, price }, removeFunc }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.title}>{title}</div>
      <div className={styles.action}>
        <p className={styles.price}>${price}</p>
        <div className={styles.removeBtn} onClick={() => removeFunc(id)}>
          <i className="fa-solid fa-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
