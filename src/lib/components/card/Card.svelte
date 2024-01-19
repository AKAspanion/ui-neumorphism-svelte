<script lang="ts">
	import type { CardProps } from './Card.types.ts';
	import { classes } from '@lib/utils/cs';
	import { getTheme } from '@lib/theme/index';
	import './Card.css';
	import { normalize } from '@lib/utils/fn';

	const theme = getTheme();

	type $$Props = CardProps;

	export let flat = false;
	export let inset = false;
	export let rounded = false;
	export let bordered = false;
	export let outlined = false;
	export let container = false;
	export let elevation = 1;

	let element: HTMLDivElement;

	export function getElement() {
		return element;
	}

	const getClass = (dark: boolean) => {
		const cardElevation = !isNaN(elevation) ? String(elevation) : null;
		return classes(
			`nu-card
			${flat ? 'nu-card--flat' : ''}
			elevation-${cardElevation || 1}
			${inset ? 'nu-card--inset' : ''}
			nu-card--${dark ? 'dark' : 'light'}
			${rounded ? 'nu-card--rounded' : ''}
			${bordered ? 'nu-card--bordered' : ''}
			${outlined ? 'nu-card--outlined' : ''}
			${container ? 'nu-card--container' : ''}
			${normalize($$restProps.class)}`
		);
	};
</script>

<div {...$$restProps} bind:this={element} class={getClass($theme.dark)}>
	<slot />
</div>
