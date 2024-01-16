import type { CommonProps } from '@lib/types/common';

const mapping = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
	caption: 'p',
	overline: 'p',
	'subtitle-1': 'p',
	'subtitle-2': 'p',
	'body-1': 'p',
	'body-2': 'p'
};

export type TypographyType = keyof typeof mapping;

export type TypographyProps = CommonProps & {
	dark?: boolean;
	disabled?: boolean;
	secondary?: boolean;
	type?: TypographyType;
};
