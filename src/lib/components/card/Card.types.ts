import type { CommonProps } from '@lib/types/common';

export type CardProps = CommonProps & {
	bordered?: boolean;
	disabled?: boolean;
	dark?: boolean;
	elevation?: number;
	flat?: boolean;
	height?: number;
	inset?: boolean;
	loading?: boolean;
	maxHeight?: number;
	maxWidth?: number;
	minHeight?: number;
	minWidth?: number;
	outlined?: boolean;
	rounded?: boolean;
	container?: boolean;
	width?: string;
};
