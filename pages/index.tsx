import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Section from '../components/Section';
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
		},
		{ urlName: 'terrain-tinker', name: 'terrain tinker', ref: useRef(), linkRef: useRef() },
		{ urlName: 'playlistsyncr', name: 'playlistsyn.cr', ref: useRef(), linkRef: useRef() },
		{ urlName: 'chorus', name: 'chorus', ref: useRef(), linkRef: useRef() },
		{
			urlName: 'nicholson-consulting',
			name: 'nicholson consulting',
			ref: useRef(),
			linkRef: useRef(),
		},
		{
			urlName: 'uni',
			name: 'uni',
			ref: useRef(),
			linkRef: useRef(),
			additionalClasses: [styles['nav__link--extra-margin-top']],
		},
		{ urlName: 'about-me', name: 'about me', ref: useRef(), linkRef: useRef() },
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

		// @ts-ignore TODO: handle properly
		setActiveSection(sections.find(haveScrolledIntoSection));
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
