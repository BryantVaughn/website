import Project from './Project';
import projects from '../public/data/projects.js';
import styles from './ProjectList.module.css';

export default function ProjectList() {
  return (
    <div className={styles.container}>
      {projects.map(project => (
        <Project {...project} />
      ))}
      <Project />
    </div>
  );
}