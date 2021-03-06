import styles from './Project.module.css';

export default function Project({ ...props }) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.image} src={props.image} alt={`${props.title} image`} />
      <div className={styles.cardBody}>
        <h5 className={styles.title}>
          {props.title}
        </h5>
        <p>{props.description}</p>
        <div className={styles.buttons}>
          <button><a className={styles.link} href={props.url} target="_blank">Visit</a></button>
          <button><a className={styles.link} href={props.githubUrl} target="_blank">Repo</a></button>
        </div>
      </div>
    </div>
  );
}