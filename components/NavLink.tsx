import styles from '../styles/Home.module.css';
import { ForwardedRef, forwardRef } from 'react';
import { Section } from '../types/Section';
import smoothScroll from 'smoothscroll-polyfill';

// eslint-disable-next-line react/display-name
export default forwardRef((props: { active: boolean; section: Section }, ref: ForwardedRef<HTMLHeadingElement>) => {
	// FIXME: additionalClasses fails if there are more than 1
	const classes = `
						${props.active ? styles['nav__link--active'] : ''}
						${styles['nav__link']}
						${props.section.additionalClasses}
						hoverable
					`;

	const animatedScrollToSection = (): void => {
		// smooth scroll doesn't work on saf and probably edge and ie so needs to be poly-filled
		// @NOTE might require requestAnimationFrame polyfill for some browsers according to docs
		// @NOTE maybe better to put in _app.tsx in a useEffect?
		smoothScroll.polyfill();

		// @ts-ignore TODO: handle properly
		props.section.ref.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<h1 key={props.section.urlName} className={classes} onClick={animatedScrollToSection} ref={ref}>
			{props.section.name}
		</h1>
	);
});
