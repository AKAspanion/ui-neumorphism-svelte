import type { ButtonProps } from '../button/Button.types';

export type ToggleButtonProps = Omit<ButtonProps, 'type' | 'text' | 'block' | 'depressed'> & {
	value?: boolean;
};
