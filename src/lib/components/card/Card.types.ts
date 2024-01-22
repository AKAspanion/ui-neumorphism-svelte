import type { CommonProps } from '@lib/types/common';

type CardContextProps = {
	dark?: boolean;
	rounded?: boolean;
	disabled?: boolean;
	outlined?: boolean;
	bordered?: boolean;
};

export type CardContext = CardContextProps;

export type CardProps = CommonProps &
	CardContext & {
		elevation?: number;
		flat?: boolean;
		height?: number;
		inset?: boolean;
		loading?: boolean;
		maxHeight?: number;
		maxWidth?: number;
		minHeight?: number;
		minWidth?: number;
		rounded?: boolean;
		container?: boolean;
		width?: string;
	};
