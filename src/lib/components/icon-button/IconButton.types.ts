import type { ButtonProps } from '../button/Button.types';

export type IconButtonProps = Omit<ButtonProps, 'type' | 'text' | 'block' | 'depressed'>;
