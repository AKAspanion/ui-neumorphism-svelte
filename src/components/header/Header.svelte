<script lang="ts">
	import { Card, H3, H6, Icon, IconButton } from '@lib';
	import { ToggleButton } from '@lib/components/toggle-button';
	import { mdiNpm, mdiMenu, mdiGithub, mdiLightbulb, mdiLightbulbOutline } from '@mdi/js';

	import { createEventDispatcher } from 'svelte';

	export let dark = false;
	export let size: 'sm' | 'xs' | undefined = undefined;

	let dispatch = createEventDispatcher();

	$: isSmall = size === 'sm' || size === 'xs';

	const onMenuClick = () => {
		dispatch('menuclick');
	};

	const onDarkChange = () => {
		dispatch('darkchange');
	};

	const openNPM = () => {
		window.open('https://www.npmjs.com/package/ui-neumorphism-svelte', '_blank');
	};
	const openGithub = () => {
		window.open('https://github.com/AKAspanion/ui-neumorphism-svelte', '_blank');
	};
</script>

<Card flat {dark} class={'flex items-center justify-between'}>
	<Card flat class="flex align-center gap-2">
		{#if isSmall}
			<IconButton on:click={onMenuClick}>
				<Icon path={mdiMenu} size={1} />
			</IconButton>
		{/if}
		<div class="pt-1">
			{#if isSmall}
				<H6 style="color: var(--primary);">UI-Neumorphism</H6>
			{:else}
				<H3 style="color: var(--primary);">UI-Neumorphism</H3>
			{/if}
		</div>
	</Card>
	<Card flat class="flex align-center gap-2">
		<IconButton on:click={openNPM}>
			<Icon path={mdiNpm} size={1.4} />
		</IconButton>
		<IconButton on:click={openGithub}>
			<Icon path={mdiGithub} size={1} />
		</IconButton>
		<ToggleButton on:change={onDarkChange}>
			<Icon path={dark ? mdiLightbulbOutline : mdiLightbulb} size={1} />
		</ToggleButton>
	</Card>
</Card>
