<script lang="ts">
	import { classes } from '@lib/utils/cs';
	import { getTheme } from '@lib/theme';
	import './Divider.css';
	import { normalize } from '@lib/utils/fn';

	const theme = getTheme();

	export let dense: boolean = false;
	export let elevated: boolean = false;

	const getClass = (dark: boolean) => {
		return classes(`
            nu-divider
            ${dense ? 'nu-divider--dense' : ''}
            nu-divider--${dark ? 'dark' : 'light'}
            ${elevated ? 'nu-divider--elevated' : ''}
            ${normalize($$restProps.class)}
        `);
	};
</script>

<hr class={getClass($theme.dark)} />
