import styles from '../styles/Home.module.css';
import NavLink from './NavLink';

export default function Nav({ sections }) {
	return (
		<nav id={styles.nav}>
			{sections.map((section) => (
				<NavLink key={section.urlName} section={section} />
			))}
		</nav>
	);
}
