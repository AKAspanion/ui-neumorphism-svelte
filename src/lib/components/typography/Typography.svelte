<script lang="ts">
	import { classes } from '@lib/utils/cs';
	import { getTheme } from '@lib';
	import type { TypographyProps } from './Typography.types';
	import './Typography.css';
	import { normalize } from '@lib/utils/fn';

	type $$Props = TypographyProps;

	const theme = getTheme();

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

	const getClass = (dark: boolean) => {
		return classes(`
            nu-typography
            nu-${type || 'body-1'}
            nu-typography--${getTypographyType()}
            nu-typography--${dark ? 'dark' : 'light'}
			${normalize($$restProps.class)}
        `);
	};
</script>

<div {...$$restProps} bind:this={element} class={getClass($theme.dark)}>
	<slot />
</div>
