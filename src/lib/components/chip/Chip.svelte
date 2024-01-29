<script lang="ts">
	import ChipChildren from './ChipChildren.svelte';
	import { classes } from '@lib/utils/cs';
	import { CONTEXT_COLORS, SIZES } from '@lib/assets';
	import { normalize, uid } from '@lib/utils/fn';
	import { getTheme } from '@lib';
	import './Chip.css';

	const theme = getTheme();

	export let dark = false;
	export let flat = false;
	export let label = false;
	export let active = false;
	export let outlined = false;
	export let bordered = false;
	export let closable = false;
	export let link = '';
	export let type = '';
	export let size = '';
	export let color = '';

	$: darkProp = dark || $theme.dark;
	$: sizeProp = SIZES.find((s) => s === size) || 'medium';
	$: typeProp = CONTEXT_COLORS.find((t) => t === type) || null;

	let id = uid();

	const getClasses = (t: string, d: boolean) => {
		switch (t) {
			case 'chip':
				return classes(`
                    nu-chip
                    nu-chip--${sizeProp}
                    ${flat ? 'nu-chip--flat' : ''}
                    ${label ? 'nu-chip--label' : ''}
                    ${active ? 'nu-chip--active' : ''}
                    nu-chip--${d ? 'dark' : 'light'}
                    ${outlined ? 'nu-chip--outlined' : ''}
                    ${bordered ? 'nu-chip--bordered' : ''}
                    ${typeProp ? `nu-chip--${typeProp}` : ''}
                `);
			default:
				return classes(t);
		}
	};

	const getStyles = () => {
		const colorProp = color ? `--text-color:${color};` : '';
		return `${colorProp}${normalize($$restProps.style)}`;
	};
</script>

{#if link}
	<a {id} href={link} style={getStyles()} class={getClasses('chip', darkProp)}>
		<ChipChildren {closable} on:action>
			<slot slot="prepend" name="prepend" />
			<slot slot="default" />
			<slot slot="append" name="append" />
			<slot slot="action" name="action" />
		</ChipChildren>
	</a>
{:else}
	<span {id} style={getStyles()} class={getClasses('chip', darkProp)}>
		<ChipChildren {closable} on:action>
			<slot slot="prepend" name="prepend" />
			<slot slot="default" />
			<slot slot="append" name="append" />
			<slot slot="action" name="action" />
		</ChipChildren>
	</span>
{/if}
