import React from 'react'
import styles from "./About.module.css"
import skills from "../../data/skills.json";

const About = () => {
    return (
        <section className={styles.about} id="about">
            <div className={styles.education}>
                <h3 className={styles.heading}>Educational background</h3>
                <ul className={styles.details}>
                    <li className={styles.items}>
                        <p className={styles.institution}><span>Matriculation :</span> Kendriya Vidyalaya, Dhenkanalr</p>
                        <p>Batch : 2019-20 &nbsp;|&nbsp;Grade : 95.4% </p>
                        <p></p>
                    </li>
                    <li className={styles.items}>
                        <p className={styles.institution}><span>Higher-Secondary Education :</span> Mother's Public School, Unit 1, Bhubaneswar</p>
                        <p>Stream : Science &nbsp;|&nbsp; Batch : 2020-22 &nbsp;|&nbsp;Grade : 92.4% </p>
                        <p></p>
                    </li>
                    <li className={styles.items}>
                        <p className={styles.institution}><span>Graduation :</span> Silicon Institute of Technology, Bhubaneswar</p>
                        <p>Stream : Computer Science &nbsp;|&nbsp; Batch : 2022-26 &nbsp;|&nbsp;Grade : 8.83 cgpa </p>
                        <p></p>
                    </li>
                </ul>
            </div>
            <div className={styles.skills}>
                <h3 className={styles.heading}>Skills</h3>
                <div className={styles.icons}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImg}>
                                    <img src={skill.imgSrc} alt={skill.title} />
                                </div>
                                <p className={skill.title}>{skill.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default About
