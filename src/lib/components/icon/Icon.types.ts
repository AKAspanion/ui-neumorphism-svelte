import type { CommonProps } from '@lib/types/common';

export type IconProps = CommonProps & {
	path?: string;
	size?: number;
	color?: string;
	flip?: 'h' | 'v' | string;
	rotate?: number;
	title?: string;
};
