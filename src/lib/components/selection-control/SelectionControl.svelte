<script lang="ts">
	import { classes } from '@lib/utils/cs';
	import { createEventDispatcher } from 'svelte';
	import { normalize, uid } from '@lib/utils/fn';
	import type { SelectionControlType } from '@lib/types/common';
	import { getTheme } from '@lib';

	let dispatch = createEventDispatcher();

	const theme = getTheme();

	export let color = '';
	export let dark = false;
	export let value = false;
	export let disabled = false;
	export let type: SelectionControlType = 'none';

	let id = uid();

	$: darkProp = $theme.dark || dark;
	$: inputType = ['radio', 'checkbox', 'switch'].find((i) => i === type) || 'checkbox';

	const handleChange = (event: Event, currValue: boolean) => {
		dispatch('click', event);
		dispatch('change', { event, id, checked: !currValue });
	};

	const getClasses = (elem: string, dark: boolean) => {
		const disabledInputClass = disabled ? `nu-${inputType}--disabled` : '';
		const disabledLabelClass = disabled ? `nu-${inputType}-label--disabled` : 'cursor-pointer';

		switch (elem) {
			case 'container':
				return classes(`selection-control-container ${normalize($$restProps.class)}`);
			case 'input':
				return classes(`
                    nu-${inputType}
                    ${disabledInputClass}
                    nu-${inputType}--${dark ? 'dark' : 'light'}
                `);
			case 'label':
				return classes(`
                    nu-${inputType}-label
                    ${disabledLabelClass}
                `);
			default:
				break;
		}
	};

	const getInputStyles = () => {
		const bgStyle = !disabled && color ? `--selector-bg: ${color || ''};` : '';
		return `${bgStyle}`;
	};

	const getStyles = () => {
		return `${normalize($$restProps.style)}`;
	};
</script>

<div {...$$restProps} style={getStyles()} class={getClasses('container', darkProp)}>
	<input
		{id}
		{value}
		checked={value}
		style={getInputStyles()}
		class={getClasses('input', darkProp)}
		type={inputType === 'switch' ? 'checkbox' : inputType}
		on:click={(e) => handleChange(e, value)}
	/>
	<label for={id} class={getClasses('label', darkProp)}>
		<slot name="label" />
	</label>
</div>
