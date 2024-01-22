<script lang="ts">
	import { classes } from '@lib/utils/cs';
	import { getTheme } from '@lib';
	import type { TypographyProps } from './Typography.types';
	import { normalize } from '@lib/utils/fn';
	import './Typography.css';

	type $$Props = TypographyProps;

	const theme = getTheme();

	export let dark = false;
	export let disabled = false;
	export let secondary = false;
	export let type = 'body-1';

	$: darkProp = dark || $theme.dark;

	let element: HTMLDivElement;

	export function getElement() {
		return element;
	}

	const getTypographyType = () => {
		return disabled ? 'disabled' : secondary ? 'secondary' : 'primary';
	};

	const getClass = (isDark: boolean) => {
		return classes(`
            nu-typography
            nu-${type || 'body-1'}
            nu-typography--${getTypographyType()}
            nu-typography--${isDark ? 'dark' : 'light'}
			${normalize($$restProps.class)}
        `);
	};
</script>

<div {...$$restProps} bind:this={element} class={getClass(darkProp)}>
	<slot />
</div>
