import React from 'react'
import projects from "../../data/projects.json"
import styles from "./Projects.module.css";
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section className={styles.container}>
            <h3 className={styles.title}>Projects Showcase</h3>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return (
                        <ProjectCard key={id} project={project} />
                    )
                })}
            </div>
        </section>
    )
}

export default Projects
