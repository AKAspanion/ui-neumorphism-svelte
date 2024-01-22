<script lang="ts">
	import type { CardProps } from './Card.types.ts';
	import { classes } from '@lib/utils/cs';
	import { getTheme } from '@lib/theme/index';
	import { normalize } from '@lib/utils/fn';
	import './Card.css';

	const theme = getTheme();

	type $$Props = CardProps;

	export let dark = false;
	export let flat = false;
	export let inset = false;
	export let rounded = false;
	export let bordered = false;
	export let outlined = false;
	export let container = false;
	export let elevation = 1;

	$: darkProp = dark || $theme?.dark || false;

	let element: HTMLDivElement;

	export function getElement() {
		return element;
	}

	const getClass = (iDdark: boolean) => {
		const cardElevation = !isNaN(elevation) ? String(elevation) : null;
		return classes(
			`nu-card
			${flat ? 'nu-card--flat' : ''}
			elevation-${cardElevation || 1}
			${inset ? 'nu-card--inset' : ''}
			nu-card--${iDdark ? 'dark' : 'light'}
			${rounded ? 'nu-card--rounded' : ''}
			${bordered ? 'nu-card--bordered' : ''}
			${outlined ? 'nu-card--outlined' : ''}
			${container ? 'nu-card--container' : ''}
			${normalize($$restProps.class)}`
		);
	};
</script>

<div {...$$restProps} bind:this={element} class={getClass(darkProp)}>
	<slot />
</div>
