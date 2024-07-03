import React from 'react'
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project : {title,image,skills,live,source} }) => {
    return (
        <div className={styles.container}>
            <img src={image} alt={`image of ${title}`} className={styles.image} />
            <h4 className={styles.title}>{title}</h4>
            <ul className={styles.skills}>
                {skills.map((skill,id) => {
                    return (
                        <li key={id} className={styles.skill}>{skill}</li>
                    )
                })}
            </ul>
            <div className={styles.links}>
                <a href={live} className={styles.link} target='_blank'>Live</a>
                <a href={source} className={styles.link} target='_blank'>Source</a>
            </div>
        </div>
    )
}

export default ProjectCard
