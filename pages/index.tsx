import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Section from '../components/Section';
import SectionStackComponent from '../components/SectionStackComponent';
import { Section as SectionType } from '../types/Section';
import { ForwardedRef, useEffect, useRef, useState } from 'react';
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
			linkRef: useRef(),
			additionalClasses: [styles['nav__link--extra-margin-bottom']],
			children: (
				<SectionStackComponent
					entries={[
						{
							name: 'JAM stack',
							children: <>- React + Next.js + Mongo - Angular - Vue + Laravel + PHP + MySQL -</>,
						},
						{
							name: 'API Development',
							children: <>- Node.JS + Express + Mongo - REST API - GraphQL</>,
						},
						{
							name: 'Databases',
							children: <>- PostgreSQL - Normalization - Redis - Mongo - Firestore</>,
						},
						{
							name: 'Systems Languages',
							children: <>- Java - Python - C - C#</>,
						},
					]}
				/>
			),
		},
		{
			urlName: 'terrain-tinker',
			name: 'terrain tinker',
			ref: useRef(),
			linkRef: useRef(),
			children: (
				<SectionStackComponent
					entries={[
						{
							name: 'vue.js',
							children: <>used vue for this that and the other</>,
						},
						{
							name: 'three.js',
							children: <>bug fixing, adding features, interacting with surrounding vue app</>,
						},
						{
							name: 'cypress.js',
							children: <>used cypress to setup e2e testing for mission critical functionality</>,
						},
						{ name: 'redis' },
						{ name: 'rabbit-mq' },
						{ name: 'mysql' },
						{ name: 'docker' },
						{ name: 'linux' },
					]}
				/>
			),
		},
		{
			urlName: 'playlistsyncr',
			name: 'playlistsyn.cr',
			ref: useRef(),
			linkRef: useRef(),
			children: (
				<SectionStackComponent
					entries={[
						{ name: 'React Native' },
						{ name: 'OAuth 2' },
						{ name: 'Spotify API' },
						{ name: 'Youtube data API' },
						{ name: 'UI Design' },
					]}
				/>
			),
		},
		{
			urlName: 'chorus',
			name: 'chorus',
			ref: useRef(),
			linkRef: useRef(),
			children: (
				<SectionStackComponent entries={[{ name: 'Angular' }, { name: 'REST API desing' }, { name: 'docker' }]} />
			),
		},
		{
			urlName: 'nicholson-consulting',
			name: 'nicholson consulting',
			ref: useRef(),
			linkRef: useRef(),
			children: <div> nicholson consulting</div>,
		},
		{
			urlName: 'uni',
			name: 'uni',
			ref: useRef(),
			linkRef: useRef(),
			additionalClasses: [styles['nav__link--extra-margin-top']],
			children: (
				<SectionStackComponent
					entries={[
						{ name: 'Systems Design / Architecture' },
						{ name: 'Systems Languages' },
						{ name: 'Machine Learning' },
						{ name: 'Full Stack Development' },
					]}
				/>
			),
		},
		{
			urlName: 'about-me',
			name: 'about me',
			ref: useRef(),
			linkRef: useRef(),
			children: <div> aboutme </div>,
		},
	] as SectionType[];
	const [activeSection, setActiveSection] = useState(sections[0]);
	const navRef = useRef() as ForwardedRef<HTMLElement>;

	const changeActiveSectionOnScroll = (scrollY: number) => {
		const mainSection = document.getElementById(styles.main);

		// @ts-ignore TODO: handle properly
		const amountScrolled = scrollY + mainSection.offsetTop;

		const haveScrolledIntoSection = (section: SectionType): boolean => {
			// @ts-ignore TODO: handle properly
			const sectionTop = section.ref.current.offsetTop;
			// @ts-ignore TODO: handle properly
			const sectionBottom = section.ref.current.clientHeight + sectionTop;

			// @IDEA instead of this logic might want to do something like which section has the majority showing?
			return amountScrolled >= sectionTop && amountScrolled <= sectionBottom;
		};

		setActiveSection(sections.find(haveScrolledIntoSection) ?? activeSection);
	};

	// this is only for the mobile layout as the "main" section isn't overflowing in this scenario,
	//	the window is. sadly this means it's a bit more confusing than it should be.
	useEffect(() => {
		const changeActiveSectionBasedOnWindowScrollY = () => changeActiveSectionOnScroll(window.scrollY);

		// TODO: most probably want to debounce around here
		window.addEventListener('scroll', changeActiveSectionBasedOnWindowScrollY);
		window.addEventListener('resize', changeActiveSectionBasedOnWindowScrollY);

		return function cleanup() {
			window.removeEventListener('scroll', changeActiveSectionBasedOnWindowScrollY);
			window.removeEventListener('resize', changeActiveSectionBasedOnWindowScrollY);
		};
	}, []);

	// center the active nav link if it's been changed
	useEffect(() => {
		const activeNavLink = activeSection.linkRef.current;

		// @ts-ignore TODO: handle properly
		const halfTheRemainingClientWidth = (navRef.current.clientWidth() - activeNavLink.clientWidth) / 2;

		// @ts-ignore TODO: handle properly
		navRef.current.setScrollLeft(activeNavLink.offsetLeft - halfTheRemainingClientWidth);
	}, [activeSection]);

	return (
		<div id={styles.root}>
			<Head>
				<link href='https://fonts.googleapis.com/css2?family=Shadows+Into+Light&Open+Sans' rel='stylesheet' />
				<meta name='viewport' content='viewport-fit=cover, width=device-width, initial-scale=1, minimum-scale=1' />
				<title>sol</title>
			</Head>
			<Nav sections={sections} activeNavLink={activeSection} ref={navRef} />
			{/* @ts-ignore TODO: handle properly */}
			<main id={styles.main} onScroll={scrollEvent => changeActiveSectionOnScroll(scrollEvent.target.scrollTop)}>
				{sections.map(section => (
					<Section key={section.urlName} ref={section.ref}>
						{section.children}
					</Section>
				))}
			</main>
			<Footer />
		</div>
	);
}
