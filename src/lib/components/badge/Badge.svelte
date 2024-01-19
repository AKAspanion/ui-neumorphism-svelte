<script lang="ts">
	import { classes } from '@lib/utils/cs';
	import type { BadgeProps } from './Badge.types';
	import './Badge.css';
	import BadgeContent from './BadgeContent.svelte';
	import { normalize } from '@lib/utils/fn';

	type $$Props = BadgeProps;

	export let max = 0;
	export let label = '';
	export let content = Infinity;
	export let dot = false;
	export let inline = false;
	export let square = false;
	export let bordered = false;
	export let noPadding = false;
	export let overlap = false;
	export let left = false;
	export let visible = true;
	export let bottom = false;
	export let color = '';
	export let bgColor = '';
	export let borderColor = '';

	const getClasses = (name: string) => {
		switch (name) {
			case 'wrapper':
				return classes(`
                    nu-badge
                    ${inline ? 'nu-badge--inline' : ''}
                    ${normalize($$restProps.class)}`);
			case 'badge':
				return classes(`
                    nu-badge--badge
                    ${dot ? 'nu-badge--dot' : ''}
                    ${square ? 'nu-badge--square' : ''}
                    ${bordered ? 'nu-badge--bordered' : ''}
                    ${noPadding ? 'nu-badge--nopadding' : ''}
                    ${
						inline
							? ''
							: `
                        ${overlap ? 'nu-badge--overlap' : ''}
                        nu-badge--${left ? 'left' : 'right'}
                        nu-badge--${bottom ? 'bottom' : 'top'}
                        ${left && !bottom ? 'nu-badge--left-top' : ''}
                        ${left && bottom ? 'nu-badge--left-bottom' : ''}
                        ${!left && !bottom ? 'nu-badge--right-top' : ''}
                        ${!left && bottom ? 'nu-badge--right-bottom' : ''}`
					}`);
		}
	};

	const getStyles = () => {
		const bgColorVar = bgColor ? `--badge-bg-color:${bgColor};` : '';
		const colorVar = color ? `--badge-text-color:${color};` : '';
		const borderColorVar = borderColor ? `--badge-border-color:${borderColor};` : '';
		return `${bgColorVar}${colorVar}${borderColorVar}${normalize($$restProps.style)}`;
	};
</script>

<span style={getStyles()} class={getClasses('wrapper')}>
	{#if inline && left}
		{#if content !== Infinity}
			<BadgeContent {visible} {label} {dot} {max} class={getClasses('badge')}>
				{content}
			</BadgeContent>
		{/if}
		<slot />
	{:else}
		<slot />
		{#if content !== Infinity}
			<BadgeContent {visible} {label} {dot} {max} class={getClasses('badge')}>
				{content}
			</BadgeContent>
		{/if}
	{/if}
</span>
