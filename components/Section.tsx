import styles from '../styles/Section.module.css';
import Image from 'next/image';
import { ForwardedRef, forwardRef, PropsWithChildren, useRef } from 'react';

type Props = {
	children: JSX.Element;
};

function Section(props: PropsWithChildren<Props>, ref: ForwardedRef<HTMLElement>) {
	return (
		<section ref={ref} className={styles.section}>
			{props.children}
		</section>
		// <section ref={ref} className={styles.section}>
		// 	<article className={styles.section__item}>
		// 		<Image src='/images/terrain-tinker/editor-screenshot.png' alt='placeholder image' width='3584' height='2274' />
		// 	</article>
		// 	<article className={styles.section__item}>
		// 		<h1>{props.children}</h1>
		// 	</article>
		// 	<article className={styles.section__item}>
		// 		<ul>
		// 			<li>vue.js</li>
		// 			<li>three.js</li>
		// 			<li>cypress</li>
		// 			<li>laravel</li>
		// 			<li>rabbit-mq</li>
		// 			<li>redis</li>
		// 			<li>mysql</li>
		// 			<li>docker</li>
		// 			<li>linux</li>
		// 		</ul>
		// 	</article>
		// 	<article className={styles.section__item}>
		// 		explanations about what i did using vue etc explanations about what i did using vue etc explanations about what
		// 		i did using vue etc explanations about what i did using vue etc explanations about what i did using vue etc
		// 		explanations about what i did using vue etc explanations about what i did using vue etc explanations about what
		// 		i did using vue etc explanations about what i did using vue etc explanations about what i did using vue etc
		// 		explanations about what i did using vue etc explanations about what i did using vue etc
		// 	</article>
		// </section>
	);
}

export default forwardRef(Section);
