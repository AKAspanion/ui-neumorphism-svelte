<script lang="ts">
	import Button from '../button/Button.svelte';
	import type { IconButtonProps } from './IconButton.types.ts';

	type $$Props = IconButtonProps;

	export let text = true;
</script>

<Button
	{...$$restProps}
	on:click
	on:focus
	on:mouseup
	on:mousedown
	on:mousemove
	on:mouseover
	on:mouseenter
	on:mouseleave
	{text}
	type="icon"
	block={false}
	depressed={false}
>
	<slot />
</Button>
