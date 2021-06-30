import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Section from '../components/Section';
import { useEffect, useRef, useState } from 'react';
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

	const changeActiveSectionOnScroll = (scrollY: number) => {
		const mainSection = document.getElementById(styles.main);
		// TODO: add logging
		if (mainSection === null) return;

		const amountScrolled = scrollY + mainSection.offsetTop;

		sections
			.filter(section => {
				const sectionTop = section.ref.current.offsetTop;
				const sectionBottom = section.ref.current.clientHeight + sectionTop;

				return amountScrolled >= sectionTop && amountScrolled <= sectionBottom;
			})
			.forEach(setActiveSection);
	};

	// this is only for the mobile layout as the "main" section isn't overflowing in this scenario,
	//	the window is. sadly this means it's a bit more confusing than it should be.
	useEffect(() => {
		const changeActiveSectionBasedOnWindowScrollY = () => {
			changeActiveSectionOnScroll(window.scrollY);

			const nav = document.getElementById(styles.nav);
			// TODO: add logging
			if (nav === null) return;

			const activeNavLink = nav
				.getElementsByClassName(
					'Home_nav__link--active__1vwwm',
					// styles.nav__linkActive,
				)
				.item(0);
			// TODO: add logging
			if (activeNavLink === null) return;

			const halfTheRemainingClientWidth = (nav.clientWidth - activeNavLink.clientWidth) / 2;

			nav.scrollLeft = activeNavLink.offsetLeft - halfTheRemainingClientWidth;
		};

		// TODO: most probably want to debounce around here
		window.addEventListener('scroll', changeActiveSectionBasedOnWindowScrollY);
		// TODO: check this resize event listener is a good idea
		window.addEventListener('resize', changeActiveSectionBasedOnWindowScrollY);

		return function cleanup() {
			window.removeEventListener('scroll', changeActiveSectionBasedOnWindowScrollY);
			window.removeEventListener('resize', changeActiveSectionBasedOnWindowScrollY);
		};
	}, []);

	return (
		<div id={styles.root}>
			<Head>
				<link href='https://fonts.googleapis.com/css2?family=Shadows+Into+Light&Open+Sans' rel='stylesheet' />
				<meta name='viewport' content='viewport-fit=cover, width=device-width, initial-scale=1, minimum-scale=1' />
				<title>sol</title>
			</Head>
			<Nav sections={sections} activeNavLink={activeSection} />
			<main id={styles.main} onScroll={scrollEvent => changeActiveSectionOnScroll(scrollEvent.target.scrollTop)}>
				{sections.map(section => {
					return (
						<Section key={section.urlName} ref={section.ref}>
							😃 {section.urlName} 😃
						</Section>
					);
				})}
			</main>
			<Footer />
		</div>
	);
}
