import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>Contact</h3>
        <p>Shoot me an email or check out my online profiles</p>
        <a
          href="mailto:bf_vaughn@hotmail.com"
          target="_blank"
        >
          bf_vaughn@hotmail.com
        </a>
      </div>
    </div>
  );
}