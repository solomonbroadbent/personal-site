import styles from '../styles/Home.module.css';
import NavLink from './NavLink';
import { Section } from '../types/Section';
import { ForwardedRef, forwardRef, RefObject, useImperativeHandle, useRef } from 'react';

function Nav(props: { activeNavLink: Section; sections: Section[] }, ref: ForwardedRef<HTMLElement>) {
	const navRef = useRef() as RefObject<HTMLElement>;

	useImperativeHandle(
		ref,
		() => ({
			// @ts-ignore TODO: handle properly
			setScrollLeft: (amount: number): void => (navRef.current.scrollLeft = amount),
			// @ts-ignore TODO: handle properly
			clientWidth: (): number => navRef.current.clientWidth,
		}),
		[],
	);

	return (
		<nav id={styles.nav} ref={navRef}>
			{props.sections.map(section => (
				<NavLink
					key={section.urlName}
					section={section}
					active={section.urlName === props.activeNavLink.urlName}
					ref={section.linkRef}
				/>
			))}
		</nav>
	);
}

export default forwardRef(Nav);
