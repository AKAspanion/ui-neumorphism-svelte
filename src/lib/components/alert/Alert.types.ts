import type { BorderPositionType, ContextColorType } from '@lib/types/common';
import type { CardProps } from '../card/Card.types';

export type AlertProps = CardProps & {
	id?: string;
	dense?: boolean;
	closable?: boolean;
	type: ContextColorType;
	border?: BorderPositionType;
};
