import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.home}>
        <i class="fa-solid fa-house"></i>
      </div>
      <div className={styles.cart}>
        <i class="fa-solid fa-cart-shopping"></i>
        <div className={styles.count}>
          <p className={styles.number}>3</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
