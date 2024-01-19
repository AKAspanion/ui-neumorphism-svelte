import type { ButtonProps } from '../button/Button.types';

export type FABProps = ButtonProps & {
	top?: boolean;
	left?: boolean;
	right?: boolean;
	bottom?: boolean;
	absolute?: boolean;
	fixed?: boolean;
	animation?: boolean;
};
