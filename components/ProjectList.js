import Project from './Project';
import styles from './ProjectList.module.css';

export default function ProjectList() {
  return (
    <div className={styles.container}>
      <Project />
    </div>
  );
}