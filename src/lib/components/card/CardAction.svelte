<script lang="ts">
	import { getTheme } from '@lib';
	import { classes } from '@lib/utils/cs';
	import './Card.css';

	export let dark = false;
	export let rounded = false;

	const theme = getTheme();

	$: darkProp = dark || $theme?.dark || false;
	$: roundedProp = rounded || false;

	const getClasses = (isDark: boolean) => {
		return classes(`
            nu-card-action
            nu-card-action--${isDark ? 'dark' : 'light'}
            ${roundedProp ? 'nu-card-action--rounded' : ''}
        `);
	};
</script>

<div {...$$restProps} class={getClasses(darkProp)}>
	<slot />
</div>
