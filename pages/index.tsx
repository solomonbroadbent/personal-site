import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<main>
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
			<header id={styles['landing-section']}>
				<h1>Solomon Broadbent</h1>
				<h2>Full Stack Dev</h2>
			</header>
			<section id={styles['navigation-section']}>
				<div id={styles.links}>
					<h1
						className={`${styles.link} ${styles['link--extra-margin-bottom']} hoverable`}
					>
						skill set
					</h1>
					<h1 className={`${styles.link} ${styles['link--active']}`}>
						terrain tinker
					</h1>
					<h1 className={`${styles.link} hoverable`}>playlistsyn.cr</h1>
					<h1 className={`${styles.link} hoverable`}>chorus</h1>
					<h1 className={`${styles.link} hoverable`}>nicholson consulting</h1>
					<h1
						className={`${styles.link} ${styles['link--extra-margin-top']} hoverable`}
					>
						uni
					</h1>
					<h1 className={`${styles.link} hoverable`}>about me</h1>
				</div>
				<div id={styles.contact}>
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
				</div>
			</section>
			<section id={styles['main-section']}></section>
		</main>
	);
}
