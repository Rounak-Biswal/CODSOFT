// import { useState } from 'react'
// import Navbar from "./Components/Navbar/Navbar"
// import Products from "./Components/Products/Products"
// import Cart from "./Components/Cart/Cart"
// import styles from "./App.module.css"

// function App() {

//   return (
//     <div className="main-container">
//       <Navbar/>
//       <div className={styles.sub_container}>
//         <Products/>
//         <Cart/>
//       </div>
//     </div>
//   )
// }

// export default App


import { useState } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import styles from "./App.module.css";
import cartData from "./Components/Cart/cart.json"; // Import initial cart data if needed

function App() {
  const [cartDetails, setCartDetails] = useState(cartData);

  const addToCart = (item) => {
    setCartDetails((prevCartDetails) => [...prevCartDetails, item]);
  };

  const removeItem = (id) => {
    const newItems = cartDetails.filter((item) => item.id !== id);
    setCartDetails(newItems);
  };

  return (
    <div className="main-container">
      <Navbar />
      <div className={styles.sub_container}>
        <Products addToCart={addToCart} />
        <Cart cartDetails={cartDetails} removeItem={removeItem} />
      </div>
    </div>
  );
}

export default App;
