<script lang="ts">
	import { getTheme } from '@lib';
	import { classes } from '@lib/utils/cs';
	import { normalize } from '@lib/utils/fn';
	import './Card.css';

	export let dark = false;
	export let rounded = false;

	const theme = getTheme();

	$: darkProp = dark || $theme?.dark || false;
	$: roundedProp = rounded || false;

	const getClasses = (isDark: boolean) => {
		return classes(`
            nu-card-content
            nu-card-content--${isDark ? 'dark' : 'light'}
            ${roundedProp ? 'nu-card-content--rounded' : ''}
            ${normalize($$restProps.class)}`);
	};
</script>

<div {...$$restProps} class={getClasses(darkProp)}>
	<slot />
</div>
