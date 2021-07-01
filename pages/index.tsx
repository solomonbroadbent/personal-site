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
	// const nav = <Nav sections={sections} activeNavLink={activeSection} />;
	// const nav = <Nav sections={sections} activeNavLink={activeSection} ref={navRef} />;

	const changeActiveSectionOnScroll = (scrollY: number) => {
		const mainSection = document.getElementById(styles.main);
		// TODO: add logging
		if (mainSection === null) return;

		const amountScrolled = scrollY + mainSection.offsetTop;

		sections
			.filter(section => {
				if (section.ref.current === null) return;

				const sectionTop = section.ref.current.offsetTop;
				const sectionBottom = section.ref.current.clientHeight + sectionTop;

				// @IDEA instead of this logic might want to do something like which section has the majority showing?
				return amountScrolled >= sectionTop && amountScrolled <= sectionBottom;
			})
			.forEach(setActiveSection);
	};

	// this is only for the mobile layout as the "main" section isn't overflowing in this scenario,
	//	the window is. sadly this means it's a bit more confusing than it should be.
	useEffect(() => {
		const changeActiveSectionBasedOnWindowScrollY = () => {
			changeActiveSectionOnScroll(window.scrollY);

			if (navRef.current === undefined) {
				console.log('😘 returning!');
				return;
			}

			console.log(`😂 clientWidth ${navRef.current.clientWidth()}`);

			// TODO: add logging
			const activeNavLink = activeSection.linkRef.current;
			if (activeNavLink === null) return;

			// const halfTheRemainingClientWidth = (nav.clientWidth - activeNavLink.clientWidth) / 2;
			const halfTheRemainingClientWidth = (navRef.current.clientWidth() - activeNavLink.clientWidth) / 2;

			// nav.scrollLeft = activeNavLink.offsetLeft - halfTheRemainingClientWidth;
			// navRef.current.scrollLeft = activeNavLink.offsetLeft - halfTheRemainingClientWidth;
			navRef.current.setScrollLeft(activeNavLink.offsetLeft - halfTheRemainingClientWidth);
		};

		// TODO: most probably want to debounce around here
		window.addEventListener('scroll', changeActiveSectionBasedOnWindowScrollY);
		window.addEventListener('resize', changeActiveSectionBasedOnWindowScrollY);
		// TODO: change to only listen when a nav link is clicked (or the active nav link updated)
		//	– running the check on every click is stupid...
		// maybe don't even need this as using poly-fill. unless animations are off might still need?
		// window.addEventListener('click', changeActiveSectionBasedOnWindowScrollY);

		return function cleanup() {
			window.removeEventListener('scroll', changeActiveSectionBasedOnWindowScrollY);
			window.removeEventListener('resize', changeActiveSectionBasedOnWindowScrollY);
			// window.removeEventListener('click', changeActiveSectionBasedOnWindowScrollY);
		};
		// }, [activeSection, nav]);
	}, [activeSection, navRef]);

	return (
		<div id={styles.root}>
			<Head>
				<link href='https://fonts.googleapis.com/css2?family=Shadows+Into+Light&Open+Sans' rel='stylesheet' />
				<meta name='viewport' content='viewport-fit=cover, width=device-width, initial-scale=1, minimum-scale=1' />
				<title>sol</title>
			</Head>
			{/*{nav}*/}
			<Nav sections={sections} activeNavLink={activeSection} ref={navRef} />
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
