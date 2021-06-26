import styles from '../styles/Home.module.css';

export default function NavLink({ section }) {
	// FIXME: additionalClasses fails if there are more than 1
	const classes = `
						${styles['nav__link']}
						${section.additionalClasses}
						hoverable
					`;

	const animatedScrollToSection = () => {
		section.ref.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<h1
			key={section.urlName}
			className={classes}
			onClick={animatedScrollToSection}
		>
			{section.urlName}
		</h1>
	);
}
