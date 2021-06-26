import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Section from '../components/Section';
import { useRef, useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Home() {
	// this feels like re-inventing the wheel...
	// 	don't know react well enough yet to know how this should be done.
	const sections = [
		{
			urlName: 'skill-set',
			name: 'skill set',
			ref: useRef(),
			additionalClasses: [styles['nav__link--extra-margin-bottom']],
		},
		{ urlName: 'terrain-tinker', name: 'terrain tinker', ref: useRef() },
		{ urlName: 'playlistsyncr', name: 'playlistsyn.cr', ref: useRef() },
		{ urlName: 'chorus', name: 'chorus', ref: useRef() },
		{
			urlName: 'nicholson-consulting',
			name: 'nicholson consulting',
			ref: useRef(),
		},
		{
			urlName: 'uni',
			name: 'uni',
			ref: useRef(),
			additionalClasses: [styles['nav__link--extra-margin-top']],
		},
		{ urlName: 'about-me', name: 'about me', ref: useRef() },
	];
	const [activeSection, setActiveSection] = useState(sections[0]);

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
			<Nav
				sections={sections}
				activeNavLink={activeSection}
				activeNavLinkChanged={setActiveSection}
			/>
			<main id={styles.main}>
				{sections.map(section => {
					return (
						<Section
							key={section.urlName}
							ref={section.ref}
							shouldShow={section.urlName === activeSection.urlName}
						>
							😃 {section.urlName} 😃
						</Section>
					);
				})}
			</main>
			<Footer />
		</div>
	);
}
