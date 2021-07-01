import styles from '../styles/Home.module.css';
import NavLink from './NavLink';
import { Section } from '../types/Section';
import { ForwardedRef, forwardRef, RefObject, useImperativeHandle, useRef } from 'react';

// export default function Nav({ activeNavLink, sections }: { activeNavLink: Section; sections: Section[] }) {
export default forwardRef((props: { activeNavLink: Section; sections: Section[] }, ref) => {
	const navRef = useRef();

	useImperativeHandle(
		ref,
		() => ({
			setScrollLeft: (amount: number): void => {
				// TODO: add logging
				// if (navRef.current === null) return;

				console.log(`trying to scroll nav ${amount} to the left`);
				console.log(`navRef ${navRef} ref ${ref}`);
				navRef.current.scrollLeft = amount;
			},
			clientWidth: (): number => navRef.current.clientWidth,
		}),
		[],
	);

	return (
		<nav id={styles.nav} ref={navRef}>
			{/*{sections.map(section => (*/}
			{props.sections.map(section => (
				<NavLink
					key={section.urlName}
					section={section}
					// active={section.urlName === activeNavLink.urlName}
					active={section.urlName === props.activeNavLink.urlName}
					ref={section.linkRef}
				/>
			))}
		</nav>
	);
	// }
});

// Nav = forwardRef(Nav);
