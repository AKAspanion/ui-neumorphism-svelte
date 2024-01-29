<script lang="ts">
	import { classes } from '@lib/utils/cs';
	import { createEventDispatcher } from 'svelte';

	export let closable = false;

	let dispatch = createEventDispatcher();

	const handleActionClick = (e: Event) => {
		dispatch('action', { event: e });
	};

	const getClasses = (t: string) => {
		switch (t) {
			default:
				return classes(t);
		}
	};
</script>

{#if $$slots.prepend}
	<span class={getClasses('nu-prepend')}>
		<slot name="prepend" />
	</span>
{/if}
<slot />
{#if $$slots.append}
	<span
		class={getClasses(
			`nu-append ${$$slots.action || closable ? 'nu-append--with-action' : ''}`
		)}
	>
		<slot name="append" />
	</span>
{/if}
{#if closable}
	{#if $$slots.closeIcon}
		<span
			role="button"
			tabindex="-1"
			class={getClasses('nu-action')}
			on:click={(e) => handleActionClick(e)}
			on:keydown={(e) => handleActionClick(e)}
		>
			<slot name="closeIcon" />
		</span>
	{:else}
		<span
			role="button"
			tabindex="-1"
			class={getClasses('nu-action nu-action--close')}
			on:click={(e) => handleActionClick(e)}
			on:keydown={(e) => handleActionClick(e)}
		>
			×
		</span>
	{/if}
{:else if $$slots.action}
	<span
		role="button"
		tabindex="-1"
		class={getClasses('nu-action')}
		on:click={(e) => handleActionClick(e)}
		on:keydown={(e) => handleActionClick(e)}
	>
		<slot name="action" />
	</span>
{/if}
