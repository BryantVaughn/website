import Project from './Project';
import projects from '../public/data/projects.js';
import styles from './ProjectList.module.css';

export default function ProjectList() {
  return (
    <>
      <h3 className={styles.title}>Projects</h3>
      <div className={styles.container}>
        {projects.map(project => (
          <Project {...project} key={project.id} />
        ))}
      </div>
    </>
  );
}