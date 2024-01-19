<script lang="ts">
	import Button from '../button/Button.svelte';
	import { createEventDispatcher, getContext } from 'svelte';
	import type { ToggleButtonProps } from './ToggleButton.types';
	import { TOGGLE_BUTTON_GROUP } from '../toggle-button-group/ToggleButtonGroup.svelte';
	import type { ToggleButtonContext } from '../toggle-button-group/ToggleButtonGroup.types';

	type $$Props = ToggleButtonProps;

	export let value = '';
	export let active = false;
	export let color: string = '';

	const context = getContext<ToggleButtonContext>(TOGGLE_BUTTON_GROUP);
	$: contextSelected = context?.selectedToggleButton;
	$: contextColor = context?.color;

	$: isActive = ($contextSelected || []).includes(value) || active;
	$: propColor = isActive ? contextColor || color : '';

	let isColor: string = propColor;

	let dispatch = createEventDispatcher();

	const handleClick = (event: Event) => {
		context?.selectToggleButton && context?.selectToggleButton(value);

		dispatch('click', event);
		dispatch('change', { event, selected: isActive, value });
	};

	const handleMouseOut = () => {
		if (!isActive) {
			isColor = '';
		}
	};

	const handleMouseOver = () => {
		isColor = contextColor;
	};
</script>

<Button
	{...$$restProps}
	type="toggle"
	text
	block={false}
	depressed={true}
	active={isActive}
	color={isColor || propColor}
	on:click={handleClick}
	on:mouseout={handleMouseOut}
	on:mouseover={handleMouseOver}
>
	<slot />
</Button>
