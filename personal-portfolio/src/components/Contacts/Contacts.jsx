import React from 'react'
import styles from "./Contacts.module.css"

const Contacts = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.texts}>
                <h2 className={styles.title}>Contacts</h2>
                <p className={styles.text}>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src="../assets/contact/emailIcon.png" alt="" />
                    <a href="mailto:rounakbiswal2003@gmail.com" target='_blank'>rounakbiswal03@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src="../assets/contact/linkedinIcon.png" alt="" />
                    <a href="https://www.linkedin.com/in/rounak-biswal/" target='_blank'>linkedin.com/rounak-biswal</a>
                </li>
                <li className={styles.link}>
                    <img src="../assets/contact/githubIcon.png" alt="" />
                    <a href="https://github.com/Rounak-Biswal" target='_blank'>github.com/rounak-biswal</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contacts
