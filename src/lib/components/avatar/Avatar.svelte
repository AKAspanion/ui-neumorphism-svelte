<script lang="ts">
	import { classes } from '@lib/utils/cs';
	import type { AvatarProps } from './Avatar.types';
	import { SIZES } from '@lib/assets';
	import type { SizesType } from '@lib/types/common';
	import { onMount } from 'svelte';
	import './Avatar.css';

	type $$Props = AvatarProps;

	export let size: SizesType | number = 'medium';
	export let alt = '';
	export let src = '';
	export let color = '';
	export let bgColor = '';
	export let square = false;
	export let rounded = false;
	export let ref: HTMLDivElement | undefined = undefined;

	let loaded = false;

	$: variant = square ? 'square' : rounded ? 'rounded' : 'circle';
	$: sizeText = SIZES.find((s) => s === size) || 'medium';
	$: isSizeString = typeof size === 'string';
	$: imgSrc = () => {
		const img = new Image();
		img.onload = function () {
			loaded = true;
		};
		img.src = src;
	};

	const getInitials = () => {
		const initials = alt.match(/\b\w/g) || [];
		return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
	};

	const getClasses = (name: string) => {
		const sizeClass = isSizeString ? `nu-avatar--${sizeText}` : '';
		switch (name) {
			case 'avatar':
				return classes(`
                nu-avatar
                nu-avatar--${variant}
                ${sizeClass}
                ${$$restProps.class || ''}
        `);
			case 'img':
				return classes('nu-avatar--img');
		}
	};

	const getStyles = () => {
		const sizeStyle = typeof size === 'number' ? `width: ${size}px;height: ${size}px;` : '';
		const colorVar = color ? `--avatar-text-color:${color};` : '';
		const bgColorVar = bgColor ? `--avatar-bg-color:${bgColor};` : '';
		return `${colorVar}${bgColorVar}${sizeStyle}${$$restProps.style || ''}`;
	};

	onMount(() => {
		const img = new Image();
		img.onload = function () {
			loaded = true;
		};
		img.src = src;
	});
</script>

<div {...$$restProps} bind:this={ref} style={getStyles()} class={`${getClasses('avatar')}`}>
	{#if src && loaded}
		<img {alt} {src} width={size} height={size} />
	{:else if $$slots.default}
		<slot />
	{:else if alt}
		{getInitials()}
	{/if}
</div>
