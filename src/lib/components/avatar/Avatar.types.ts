import type { CommonProps, SizesType } from '@lib/types/common';

export type AvatarProps = CommonProps & {
	size?: SizesType | number;
	alt?: string;
	src?: string;
	color?: string;
	bgColor?: string;
	rounded?: boolean;
	square?: boolean;
	ref?: HTMLDivElement;
};
