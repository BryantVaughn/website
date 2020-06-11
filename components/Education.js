import styles from "./Education.module.css";

export default function Education() {
  return (
    <>
      <h3 className={styles.title}>Education</h3>
      <div className={styles.container}>
        <h5 className={styles.school}>
          Metropoptan State University of Denver
        </h5>
        <h6>Bachelor of Science, Computer Science</h6>
        <h6>Cum Laude Honors</h6>
        <p className={styles.courseHead}>
          Relevant / favorite courses
        </p>
        <section className={styles.columns}>
          <div className={styles.column}>
            <p>
              Technical Software Project
            </p>
            <p>
              Digital Image Processing
            </p>
            <p>
              Probabipty & Statistics
            </p>
          </div>
          <div className={styles.column}>
            <p>
              Calculus III
            </p>
            <p>
              Algorithms & Algorithm Analysis
            </p>
            <p>
              Computer & Network Security
            </p>
          </div>
          <div className={styles.column}>
            <p>
              Computer Pen Testing & Defense
            </p>
            <p>
              Software Dev Methods & Tools
            </p>
            <p>
              Intro to Theory of Computation
            </p>
          </div>
        </section>
      </div>
    </>
  );
}