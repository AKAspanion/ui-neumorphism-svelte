<script context="module">
	import { writable } from 'svelte/store';
	export const themeContextKey = 'nu-theme';

	const defaults = {
		dark: false
	};

	export const themeStore = writable(defaults);
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	export let theme = {};

	$: $themeStore = { ...$themeStore, ...theme };

	setContext(themeContextKey, themeStore);
</script>

<slot theme={$themeStore} />
