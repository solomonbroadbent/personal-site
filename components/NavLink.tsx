import styles from '../styles/Home.module.css';
import { ForwardedRef, forwardRef } from 'react';
import { Section } from '../types/Section';

export default forwardRef((props: { active: boolean; section: Section }, ref: ForwardedRef<HTMLHeadingElement>) => {
	// FIXME: additionalClasses fails if there are more than 1
	const classes = `
						${props.active ? styles['nav__link--active'] : ''}
						${styles['nav__link']}
						${props.section.additionalClasses}
						hoverable
					`;

	const animatedScrollToSection = (): void => {
		// TODO: add logging
		if (props.section.ref.current === null) return;

		props.section.ref.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<h1 key={props.section.urlName} className={classes} onClick={animatedScrollToSection} ref={ref}>
			{props.section.name}
		</h1>
	);
});
