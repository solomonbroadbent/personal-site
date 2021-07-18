import styles from '../styles/Section.module.css';
import React, { useState } from 'react';

type Props = {
	// TODO: restrict these to the components actually allowed
	entries: {
		name: string;
		children?: React.ReactNode;
	}[];
	initialActiveEntryName?: string;
};

const SectionStackComponent = ({ entries, initialActiveEntryName }: Props) => {
	const [activeEntryName, setActiveEntryName] = useState(initialActiveEntryName ?? entries[0].name);

	return (
		<div className={styles.stack + ' bordered'}>
			{/*// <div className={styles.stack}>*/}
			<div className={styles['stack__entry-names']}>
				{/* @ts-ignore TODO: fix typescript error */}
				{entries.map(entry => (
					<h3
						key={entry.name}
						className={
							(entry.children ? ' hoverable ' + styles['stack__entry-names--clickable'] + ' ' : '') +
							(activeEntryName === entry.name && entry.children
								? styles['stack__entry-names--active']
								: ' not-clickable ')
						}
						onClick={() => {
							if (entry.children) setActiveEntryName(entry.name);
						}}
					>
						{entry.name}
					</h3>
				))}
			</div>
			<div className={styles.stack__entries}>
				{entries
					.filter(entry => entry.children)
					.map(entry => (
						// TODO: think this needs to be in a useEffect
						<div className={activeEntryName === entry.name ? '' : 'hidden'} key={entry.name}>
							{entry.children}
						</div>
					))}
			</div>
		</div>
	);
};

export default SectionStackComponent;
