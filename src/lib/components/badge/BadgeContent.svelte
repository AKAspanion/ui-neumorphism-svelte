<script lang="ts">
	export let label = '';
	export let dot: boolean;
	export let max: number;
	export let visible: boolean;

	$: isContentNumber = typeof $$slots.default === 'number';
	$: contentAsNumber = typeof $$slots.default === 'number' ? Number($$slots.default) : 0;
</script>

{#if visible}
	<span {...$$restProps} class={$$restProps.class} aria-label={label}>
		{#if !dot}
			{#if isContentNumber}
				{#if contentAsNumber > max}
					{`${max}+`}
				{:else}
					<slot />
				{/if}
			{:else}
				<slot />
			{/if}
		{/if}
	</span>
{/if}
