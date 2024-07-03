import React from 'react'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.description}>
            <h1 className={styles.title}>Hi, I'm Rounak !</h1>
            <p className={styles.paragraph}>Full-stack developer with expertise in <i>Tailwind, React, NodeJS & MySQL</i>. <br /> Get in touch to see my full skillset.</p>
            <button className={styles.contactBtn}>Contact Me</button>
        </div>
        <img className={styles.heroImg}
            src="../assets/hero/heroImage.png" alt="this is img" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
