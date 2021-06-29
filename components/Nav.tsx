import styles from '../styles/Home.module.css';
import NavLink from './NavLink';
import { useState } from 'react';

export default function Nav({ activeNavLink, sections }) {
	return (
		<nav id={styles.nav}>
			{sections.map(section => (
				<NavLink
					key={section.urlName}
					section={section}
					active={section.urlName === activeNavLink.urlName}
				/>
			))}
		</nav>
	);
}
