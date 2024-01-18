/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ALTERNATE_BUTONS, SIZES } from '@lib/assets';

export type CommonProps = {
	dark?: boolean;
	class?: string;
	style?: string;
};

export type SizesType = (typeof SIZES)[number];
export type ButtonType = (typeof ALTERNATE_BUTONS)[number];
