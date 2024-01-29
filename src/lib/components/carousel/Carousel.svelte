<script lang="ts">
	import { slide, type SlideParams } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { createEventDispatcher, onMount } from 'svelte';
	import { classes } from '@lib/utils/cs';
	import { normalize } from '@lib/utils/fn';
	import { getTheme } from '@lib';
	import './Carousel.css';

	let dispatch = createEventDispatcher();

	const theme = getTheme();

	export let value = 0;
	export let height = 400;
	export let dark = false;
	export let cycle = false;
	export let vertical = false;
	export let interval = 5000;
	export let showArrows = true;
	export let hideDelimiters = false;
	export let showArrowsOnHover = false;

	let active = value;
	let prevActive = 0;
	let disabled = false;
	let timer: NodeJS.Timeout;
	let disabledTimeout: NodeJS.Timeout;

	$: darkProp = dark || $theme.dark;
	$: axis = vertical ? 'y' : ('x' as SlideParams['axis']);

	$: {
		dispatch('change', { active });
	}

	const updateActiveState = (a: number, prev: number) => {
		active = a;
		prevActive = prev;
	};

	const nextSlide = () => {
		const itemsLength = 2;
		if (itemsLength && !disabled) {
			const next = active + 1 >= itemsLength ? 0 : active + 1;
			updateActiveState(next, active);
		}
	};

	const prevSlide = () => {
		const itemsLength = 2;
		if (itemsLength && !disabled) {
			const next = active - 1 < 0 ? itemsLength - 1 : active - 1;
			updateActiveState(next, active);
		}
	};

	const startTimeout = () => {
		disabled = true;
		disabledTimeout = setTimeout(() => {
			disabled = false;
		}, 300);
	};

	const stopTimeout = () => {
		clearTimeout(disabledTimeout);
	};

	const startTimer = () => {
		if (cycle) {
			timer = setInterval(() => {
				stopTimeout();
				nextSlide();
				startTimeout();
			}, interval);
		}
	};

	const stopTimer = () => {
		if (cycle) {
			clearInterval(timer);
		}
	};

	const toggleClocks = (type: string) => {
		switch (type) {
			case 'start':
				startTimer();
				startTimeout();
				break;
			case 'stop':
				stopTimer();
				stopTimeout();
				break;
			default:
				break;
		}
	};

	const handleIconClick = (direction: string) => {
		toggleClocks('stop');
		switch (direction) {
			case 'next':
				nextSlide();
				break;
			case 'prev':
				prevSlide();
				break;
			default:
				break;
		}
		toggleClocks('start');
	};

	const handleDelimiterClick = (e: Event, ac: number) => {
		toggleClocks('stop');
		updateActiveState(ac, active);
		toggleClocks('start');

		dispatch('delimiterclick', { event: e, active: ac });
	};

	const getClasses = (type: string, d?: boolean) => {
		switch (type) {
			case 'main':
				return classes(`
                    nu-carousel
                    nu-carousel--${d ? 'dark' : 'light'}
                    ${normalize($$restProps.class)}
                `);
			default:
				return classes(type);
		}
	};

	const getStyles = () => {
		const heightStyle = !height ? '' : `height:${height}px;`;
		return `${heightStyle}${normalize($$restProps.style)}`;
	};

	onMount(() => {
		stopTimer();
		stopTimeout();
	});

	const items = [1, 2, 3, 4];
</script>

<div style={getStyles()} class={getClasses('main', darkProp)}>
	<div
		class={getClasses('nu-carousel-container')}
		transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis }}
	>
		<slot />
	</div>
	{#if !hideDelimiters}
		<div class={getClasses('nu-carousel-controls')}>
			{#each items as item, index}
				<div
					role="button"
					tabindex="-1"
					class={`${!$$slots.delimiterIcon ? getClasses('nu-carousel-delimiter') : ''} ${
						active === index && !$$slots.delimiterIcon
							? getClasses('nu-carousel-delimiter--active')
							: ''
					}`}
					on:click={(e) => handleDelimiterClick(e, index)}
					on:keydown={(e) => handleDelimiterClick(e, index)}
				>
					{#if active === index}
						<slot name="activeDelimiterIcon" />
					{:else}
						<slot name="delimiterIcon" />
					{/if}
				</div>
			{/each}
		</div>
	{/if}
	{#if showArrows}
		<div
			role="button"
			tabindex="-1"
			class={`${getClasses('nu-carousel-arrow nu-carousel-arrow--next')} ${
				!showArrowsOnHover ? getClasses('nu-carousel-arrow--always') : ''
			}`}
			on:click={() => handleIconClick('next')}
			on:keydown={() => handleIconClick('next')}
		>
			{#if $$slots.nextIcon}
				<slot name="nextIcon" />
			{:else}
				<span>&rsaquo;</span>
			{/if}
		</div>
		<button
			type="button"
			class={`${getClasses('nu-carousel-arrow nu-carousel-arrow--prev')} ${
				!showArrowsOnHover ? getClasses('nu-carousel-arrow--always') : ''
			}`}
			on:click={() => handleIconClick('prev')}
		>
			{#if $$slots.prevIcon}
				<slot name="prevIcon" />
			{:else}
				<span>&rsaquo;</span>
			{/if}
		</button>
	{/if}
</div>
