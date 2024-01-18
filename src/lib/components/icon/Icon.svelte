<script lang="ts">
	import type { IconProps } from './Icon.types';

	type $$Props = IconProps;

	export let color = '';
	export let flip = '';
	export let path = '';
	export let size = 1;
	export let rotate = 0;
	export let title = '';

	// size
	if (Number(size)) size = Number(size);

	const getStyles = () => {
		const transform = [];
		const styles = [];

		if (size !== null) {
			const width = typeof size === 'string' ? size : `${size * 1.5}rem`;
			styles.push(['width', width]);
			styles.push(['height', width]);
		}

		styles.push(['fill', color !== null ? color : 'currentColor']);

		if (flip === 'h') {
			transform.push('scaleX(-1)');
		}

		if (flip === 'v') {
			transform.push('scaleY(-1)');
		}

		if (rotate != 0) {
			transform.push(`rotate(${rotate}deg)`);
		}

		if (transform.length > 0) {
			styles.push(['transform', transform.join(' ')]);
			styles.push(['transform-origin', 'center']);
		}

		return styles.reduce((cur, item) => {
			return `${cur} ${item[0]}:${item[1]};`;
		}, '');
	};

	$: style = getStyles();
</script>

<svg viewBox="0 0 24 24" {style}>
	{#if title}<title>{title}</title>{/if}
	<path d={path}></path>
</svg>

<style>
	svg {
		vertical-align: middle;
	}
</style>
