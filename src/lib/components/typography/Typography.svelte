<script lang="ts">
	import { getClasses } from '@lib/utils/cs';
	import type { TypographyProps } from './Typography.types';
	import './Typography.css';

	type $$Props = TypographyProps;

	export let dark = false;
	export let disabled = false;
	export let secondary = false;
	export let type = 'body-1';

	let element: HTMLDivElement;

	export function getElement() {
		return element;
	}

	const getTypographyType = () => {
		return disabled ? 'disabled' : secondary ? 'secondary' : 'primary';
	};

	const getClass = () => {
		return getClasses(`
            nu-typography
            nu-${type || 'body-1'}
            nu-typography--${getTypographyType()}
            nu-typography--${dark ? 'dark' : 'light'}
			${$$restProps.class}
        `);
	};
</script>

<div {...$$restProps} bind:this={element} class={getClass()}>
	<slot />
</div>
