<script lang="ts">
	import { getClasses } from '@lib/utils/cs';
	import { getTheme } from '@lib/theme';
	import './Divider.css';

	const theme = getTheme();

	export let dense: boolean = false;
	export let elevated: boolean = false;

	const getClass = (dark: boolean) => {
		return getClasses(`
            nu-divider
            ${dense ? 'nu-divider--dense' : ''}
            nu-divider--${dark ? 'dark' : 'light'}
            ${elevated ? 'nu-divider--elevated' : ''}
            ${$$restProps.class}
        `);
	};
</script>

<hr class={getClass($theme.dark)} />
