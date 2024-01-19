import type { CommonProps } from '@lib/types/common';
import type { Writable } from 'svelte/store';

export type ToggleButtonGroupProps = CommonProps & {
	multiple?: boolean;
	color?: string;
	value?: string[];
};

export type ToggleButtonContext = {
	selectToggleButton: (tb: string) => void;
	selectedToggleButton: Writable<string[]>;
	color: string;
};
