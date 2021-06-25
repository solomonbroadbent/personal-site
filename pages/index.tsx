import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div id={styles.root}>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Shadows+Into+Light&Open+Sans'
					rel='stylesheet'
				/>
				<meta
					name='viewport'
					content='viewport-fit=cover, width=device-width, initial-scale=1, minimum-scale=1'
				/>
				<title>sol</title>
			</Head>
			<nav id={styles.nav}>
				<h1
					className={`${styles['nav__link']} ${styles['nav__link--extra-margin-bottom']} hoverable`}
				>
					skill set
				</h1>
				<h1 className={`${styles['nav__link']} ${styles['nav__link--active']}`}>
					terrain tinker
				</h1>
				<h1 className={`${styles['nav__link']} hoverable`}>playlistsyn.cr</h1>
				<h1 className={`${styles['nav__link']} hoverable`}>chorus</h1>
				<h1 className={`${styles['nav__link']} hoverable`}>
					nicholson consulting
				</h1>
				<h1
					className={`${styles['nav__link']} ${styles['nav__link--extra-margin-top']} hoverable`}
				>
					uni
				</h1>
				<h1 className={`${styles['nav__link']} hoverable`}>about me</h1>
			</nav>
			<main id={styles.main}></main>
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
		</div>
	);
}
