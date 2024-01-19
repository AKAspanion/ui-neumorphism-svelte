import type { CommonProps } from '@lib/types/common';

export type BadgeProps = CommonProps & {
	dot?: boolean;
	left?: boolean;
	bottom?: boolean;
	inline?: boolean;
	square?: boolean;
	overlap?: boolean;
	bordered?: boolean;
	max?: number;
	content?: number;
	label?: string;
	color?: string;
	bgColor?: string;
	borderColor?: string;
};
