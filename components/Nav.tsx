import styles from '../styles/Home.module.css';
import NavLink from './NavLink';
import { Section } from '../types/Section';

export default function Nav({ activeNavLink, sections }: { activeNavLink: Section; sections: Section[] }) {
	return (
		<nav id={styles.nav}>
			{sections.map(section => (
				<NavLink
					key={section.urlName}
					section={section}
					active={section.urlName === activeNavLink.urlName}
					ref={section.linkRef}
				/>
			))}
		</nav>
	);
}
