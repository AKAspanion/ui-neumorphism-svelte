import type { ButtonType, CommonProps, SizesType } from '@lib/types/common';

export type ButtonProps = CommonProps & {
	id?: string;
	type?: ButtonType;
	dark?: boolean;
	size?: SizesType;
	color?: string;
	bgColor?: string;
	text?: boolean;
	block?: boolean;
	active?: boolean;
	noPress?: boolean;
	rounded?: boolean;
	disabled?: boolean;
	bordered?: boolean;
	outlined?: boolean;
	depressed?: boolean;
};
