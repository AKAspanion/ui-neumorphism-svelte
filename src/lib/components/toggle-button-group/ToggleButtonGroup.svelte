<script context="module">
	export const TOGGLE_BUTTON_GROUP = 'TOGGLE_BUTTON_GROUP';
</script>

<script lang="ts">
	import { setContext, createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';
	import type { ToggleButtonGroupProps } from './ToggleButtonGroup.types';

	let dispatch = createEventDispatcher();

	type $$Props = ToggleButtonGroupProps;

	export let multiple = false;
	export let color = '';
	export let value = [''];

	export const selectedToggleButton = writable<string[]>(multiple ? value : [value[0] || '']);

	setContext(TOGGLE_BUTTON_GROUP, {
		selectToggleButton: (tb: string) => {
			if (multiple) {
				const isSelected = $selectedToggleButton.includes(tb);
				if (isSelected) {
					selectedToggleButton.update((v) => {
						const newV = [...new Set(v.filter((d) => d !== tb))];
						dispatch('change', newV);
						return newV;
					});
				} else {
					selectedToggleButton.update((v) => {
						const newV = [...new Set([...v, tb])];
						dispatch('change', newV);
						return newV;
					});
				}
			} else {
				const isSelected = $selectedToggleButton.includes(tb);
				const newV = isSelected ? [] : [tb];
				dispatch('change', newV);
				selectedToggleButton.set(newV);
			}
		},
		selectedToggleButton,
		color
	});
</script>

<div {...$$props} {...$$restProps}>
	<slot />
</div>
