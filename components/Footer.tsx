import styles from '../styles/Home.module.css';

// eslint-disable-next-line react/display-name
export default () => {
	return (
		<footer id={styles.footer}>
			<h1>Solomon Broadbent</h1>
			<h2>full stack dev</h2>
			<button
				id={styles['email-button']}
				className={`${styles.button} hoverable`}
			>
				email
			</button>
			<button
				id={styles['blog-button']}
				className={`${styles.button} hoverable`}
			>
				blog
			</button>
		</footer>
	);
};
