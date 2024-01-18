<script lang="ts">
	import Button from '../button/Button.svelte';
	import { createEventDispatcher } from 'svelte';

	export let value: boolean = false;
	export let color: string = '';

	let isActive: boolean = false;
	let isColor: string = '';

	let dispatch = createEventDispatcher();

	const handleClick = (event: Event) => {
		isActive = !isActive;
		isColor = isActive ? color : '';

		dispatch('click', { event, value });
		dispatch('change', { event, selected: isActive, value });
	};

	const handleMouseOut = () => {
		if (!isActive) {
			isColor = '';
		}
	};

	const handleMouseOver = () => {
		isColor = color;
	};
</script>

<Button
	{...$$restProps}
	type="toggle"
	text
	block={false}
	depressed={true}
	color={isColor}
	active={isActive}
	on:click={handleClick}
	on:mouseout={handleMouseOut}
	on:mouseover={handleMouseOver}
>
	<slot />
</Button>
