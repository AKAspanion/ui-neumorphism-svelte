<script lang="ts">
	import type { CardProps } from './Card.types.ts';
	import { getClasses } from '@lib/utils/cs';
	import './Card.css';

	type $$Props = CardProps;

	export let dark = false;
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

	const getClass = () => {
		const cardElevation = !isNaN(elevation) ? String(elevation) : null;
		return getClasses(
			`nu-card
			${flat ? 'nu-card--flat' : ''}
			elevation-${cardElevation || 1}
			${inset ? 'nu-card--inset' : ''}
			nu-card--${dark ? 'dark' : 'light'}
			${rounded ? 'nu-card--rounded' : ''}
			${bordered ? 'nu-card--bordered' : ''}
			${outlined ? 'nu-card--outlined' : ''}
			${container ? 'nu-card--container' : ''}
			${$$restProps.class}`
		);
	};
</script>

<div {...$$restProps} bind:this={element} class={getClass()}>
	<slot />
</div>
