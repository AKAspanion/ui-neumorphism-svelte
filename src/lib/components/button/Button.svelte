<script lang="ts">
	import type { ButtonProps } from './Button.types.js';
	import { styleToString } from '@lib/utils/style';
	import { getClasses } from '@lib/utils/cs';
	import { SIZES } from '@lib/assets';
	import type { ButtonType } from '@lib/types/common';
	import './Button.css';

	export let type: ButtonType | undefined = undefined;
	export let id = '';
	export let dark = false;
	export let color: string = '';
	export let bgColor: string = '';
	export let size = 'medium';
	export let text = false;
	export let block = false;
	export let active = false;
	export let noPress = false;
	export let rounded = false;
	export let disabled = false;
	export let bordered = false;
	export let outlined = false;
	export let depressed = false;

	type $$Props = ButtonProps;

	const getValidSize = () => {
		return SIZES.find((s) => s === size) || 'medium';
	};

	const getClass = (classType: string) => {
		switch (classType) {
			case 'container':
				return getClasses(
					`
            nu-button
            cursor-pointer
            nu-button--${type}
            ${text ? 'nu-button--text' : ''}
            ${block ? 'nu-button--block' : ''}
            ${active ? 'nu-button--active' : ''}
            nu-button--${getValidSize()}
            nu-button--${dark ? 'dark' : 'light'}
            ${rounded ? 'nu-button--rounded' : ''}
            ${noPress ? 'nu-button--no-press' : ''}
            ${outlined ? 'nu-button--outlined' : ''}
            ${bordered ? 'nu-button--bordered' : ''}
            ${disabled ? 'nu-button--disabled' : ''}
            ${depressed ? 'nu-button--depressed' : ''}
          `
				);
			case 'input':
				return getClasses('nu-button-inner');
			default:
				break;
		}
	};
</script>

<div
	{...$$restProps}
	{id}
	on:click
	on:focus
	on:mouseup
	on:mousedown
	on:mousemove
	on:mouseover
	on:mouseenter
	on:mouseleave
	tabindex="0"
	role="button"
	class={`${getClass('container')} ${$$restProps.class}`}
	style={`${styleToString({
		color: disabled ? null : color,
		backgroundColor: disabled ? null : bgColor,
		border: disabled ? null : outlined ? `1px solid ${color}` : null
	})}`}
>
	<button class={getClass('input')}>
		<slot />
	</button>
</div>
