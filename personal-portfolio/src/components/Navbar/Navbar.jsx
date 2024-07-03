import { useState } from "react";
import React from "react";
import styles from "./Navbar.module.css"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <img className={styles.menuBtn} 
                src={
                    menuOpen
                        ? "../assets/nav/closeIcon.png"
                        : "../assets/nav/menuIcon.png"
                }
                alt="menu-btn"
                onClick={() => 
                    setMenuOpen(!menuOpen)
                }
                />                
            <div className={styles.menu}>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contacts">Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;