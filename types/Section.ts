import { Ref, RefObject } from 'react';

export type Section = {
	name: string;
	urlName: string;
	additionalClasses: string[];
	ref: RefObject<HTMLElement>;
	linkRef: RefObject<HTMLHeadingElement>;
};
