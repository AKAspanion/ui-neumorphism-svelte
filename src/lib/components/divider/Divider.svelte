<script lang="ts">
	import { getClasses } from '@lib/utils/cs';
	import './Divider.css';

	export let dark: boolean = false;
	export let dense: boolean = false;
	export let elevated: boolean = false;

	const getClass = () => {
		return getClasses(`
            nu-divider
            ${dense ? 'nu-divider--dense' : ''}
            nu-divider--${dark ? 'dark' : 'light'}
            ${elevated ? 'nu-divider--elevated' : ''}
            ${$$restProps.class}
        `);
	};
</script>

<hr class={getClass()} />
