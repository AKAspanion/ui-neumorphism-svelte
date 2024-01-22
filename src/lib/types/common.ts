/* eslint-disable @typescript-eslint/no-explicit-any */

import type {
	ALTERNATE_BUTONS,
	CONTEXT_COLORS,
	POSITIONS,
	SELECTION_CONTROLS,
	SIZES
} from '@lib/assets';

export type CommonProps = {
	class?: string;
	style?: string;
};

export type SizesType = (typeof SIZES)[number] | 'none';
export type ButtonType = (typeof ALTERNATE_BUTONS)[number] | 'none';
export type BorderPositionType = (typeof POSITIONS)[number] | 'none';
export type ContextColorType = (typeof CONTEXT_COLORS)[number] | 'none';
export type SelectionControlType = (typeof SELECTION_CONTROLS)[number] | 'none';
