import styles from './Resume.module.css';

export default function Resume() {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>
        Check out my resume
      </h3>
      <button
        className={styles.button}
      >
        <a
          href="https://drive.google.com/open?id=1csjzEVVdfEbMn8w9YXoc8ay4HlcPrlPh"
          target="_blank"
        >
          Resume
        </a>
      </button>
    </div>
  );
}