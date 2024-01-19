/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ALTERNATE_BUTONS, CONTEXT_COLORS, POSITIONS, SIZES } from '@lib/assets';

export type CommonProps = {
	class?: string;
	style?: string;
};

export type SizesType = (typeof SIZES)[number];
export type ButtonType = (typeof ALTERNATE_BUTONS)[number];
export type BorderPositionType = (typeof POSITIONS)[number] | 'none';
export type ContextColorType = (typeof CONTEXT_COLORS)[number];
