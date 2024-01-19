<script lang="ts">
	import { Card, H3, Icon, IconButton, Subtitle2 } from '@lib';
	import { ToggleButton } from '@lib/components/toggle-button';
	import { getTheme } from '@lib/theme';
	import { mdiNpm, mdiMenu, mdiGithub, mdiLightbulb, mdiLightbulbOutline } from '@mdi/js';

	import { createEventDispatcher } from 'svelte';

	const theme = getTheme();

	export let size: 'sm' | 'xs' | undefined = undefined;

	let dispatch = createEventDispatcher();

	$: isSmall = size === 'sm' || size === 'xs';

	const onMenuClick = () => {
		dispatch('menuclick');
	};

	const onDarkChange = () => {
		dispatch('darkchange');
		theme.update(({ dark }) => ({ dark: !dark }));
	};

	const openNPM = () => {
		window.open('https://www.npmjs.com/package/ui-neumorphism-svelte', '_blank');
	};
	const openGithub = () => {
		window.open('https://github.com/AKAspanion/ui-neumorphism-svelte', '_blank');
	};

	$: IS_DEV = process.env.NODE_ENV === 'development';
</script>

<Card flat class={'flex items-center justify-between'}>
	<Card flat class="flex align-center gap-2">
		{#if isSmall}
			<IconButton on:click={onMenuClick}>
				<Icon path={mdiMenu} size={1} />
			</IconButton>
		{/if}
		<div class="pt-1 flex items-center gap-4">
			{#if isSmall}
				<H3 style="color: var(--primary);">
					<a href="/"> UI-Neumorphism </a>
				</H3>
			{:else}
				<H3 style="color: var(--primary);">
					<a href="/"> UI-Neumorphism </a>
				</H3>
				{#if IS_DEV}
					<Subtitle2 class="pt-3">
						<a href="showcase">Showcase</a>
					</Subtitle2>
				{/if}
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
		<ToggleButton active={$theme.dark} on:change={onDarkChange}>
			<Icon path={$theme.dark ? mdiLightbulbOutline : mdiLightbulb} size={1} />
		</ToggleButton>
	</Card>
</Card>
