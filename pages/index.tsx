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
			<main id={styles.main}>
				<section className={styles['job-information']}>
					<article className={styles['job-information__section']}>
						<Image
							// className={styles['jobInformation__section__image']}
							src='/images/terrain-tinker/editor-screenshot.png'
							alt='placeholder image'
							width='3584'
							height='2274'
						/>
					</article>
					<article className={styles['job-information__section']}>
						blah blah blah this is what i did
					</article>
					<article className={styles['job-information__section']}>
						<ul>
							<li>vue.js</li>
							<li>three.js</li>
							<li>cyrpess</li>
							<li>laravel</li>
							<li>rabbit-mq</li>
							<li>redis</li>
							<li>mysql</li>
							<li>docker</li>
							<li>linux</li>
						</ul>
					</article>
					<article className={styles['job-information__section']}>
						explanations about what i did using vue etc
					</article>
				</section>
			</main>
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
