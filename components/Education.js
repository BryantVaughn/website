import styles from './Education.module.css';

export default function Education() {
	return (
		<>
			<h3 className={styles.title}>Education</h3>
			<div className={styles.container}>
				<h5 className={styles.school}>
					Metropolitan State University of Denver
				</h5>
				<h6>Bachelor of Science, Computer Science</h6>
				<p>Dec. 2019</p>
				<p>Cum Laude Honors</p>
				<p className={styles.courseHead}>Relevant / favorite courses</p>
				<section className={styles.columns}>
					<div className={styles.column}>
						<p>Technical Software Project</p>
						<p>Digital Image Processing</p>
						<p>Probability & Statistics</p>
					</div>
					<div className={styles.column}>
						<p>Algorithms & Algorithm Analysis</p>
						<p>Calculus III</p>
						<p>Computer & Network Security</p>
					</div>
					<div className={styles.column}>
						<p>Computer Pen Testing & Defense</p>
						<p>Software Dev Methods & Tools</p>
						<p>Intro to Theory of Computation</p>
					</div>
				</section>
				<div className={styles.buttons}>
					<button>
						<a href="https://github.com/sheet-t/HPotter_4360" target="_blank">
							View Senior Project
						</a>
					</button>
					<button>
						<a
							href="https://drive.google.com/file/d/1HleLFbs8FaJFd29nFHEcSbbq76YWdPdZ/view?usp=sharing"
							target="_blank"
						>
							View Academic Transcript
						</a>
					</button>
				</div>
			</div>
		</>
	);
}
