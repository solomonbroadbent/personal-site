import styles from '../styles/Home.module.css';
import NavLink from './NavLink';
import { useState } from 'react';

export default function Nav({ sections }) {
	const [activeNavLink, setActiveNavLink] = useState(sections[0]);

	return (
		<nav id={styles.nav}>
			{sections.map(section => (
				<NavLink
					key={section.urlName}
					section={section}
					active={section.urlName === activeNavLink.urlName}
					onClick={() => setActiveNavLink(section)}
				/>
			))}
		</nav>
	);
}
