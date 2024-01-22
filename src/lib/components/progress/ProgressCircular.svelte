<script lang="ts">
	import { getTheme } from '@lib';
	import { classes } from '@lib/utils/cs';
	import { uid } from '@lib/utils/fn';
	import { styleToString } from '@lib/utils/style';
	import './Progress.css';

	const theme = getTheme();

	export let size = 36;
	export let width = 2;
	export let value = 0;
	export let rotate = 0;
	export let color = '';
	export let label = '';
	export let dark = false;
	export let flat = false;
	export let disabled = false;
	export let elevated = false;
	export let indeterminate = false;

	let id = uid();

	$: darkProp = $theme.dark || dark;
	$: radius = Number(size / 2);
	$: circumference = 2 * Math.PI * radius;
	$: normalizedValue = value ? (value > 100 ? 100 : value < 0 ? 0 : value) : 0;
	$: normalizedRotation = rotate ? (rotate > 360 ? 360 : rotate < 0 ? 0 : rotate) : 0;
	$: viewBoxSize = radius / (1 - Number(width) / Number(size));
	$: viewBox = `${viewBoxSize} ${viewBoxSize} ${2 * viewBoxSize} ${2 * viewBoxSize}`;
	$: strokeDashArray = Math.round(circumference * 1000) / 1000;
	$: strokeDashArrayOffset = calcStrokeDashArrayOffset(normalizedValue);

	const calcStrokeDashArrayOffset = (value: number) => {
		return ((100 - value) / 100) * circumference;
	};

	const getClasses = (classType: string, isDark: boolean) => {
		if (classType === 'progress') {
			return classes(
				` nu-progress-circular
          nu-progress-circular--${flat ? 'flat' : ''}
          nu-progress-circular--${isDark ? 'dark' : 'light'}
          nu-progress-circular--${elevated ? 'elevated' : 'not-elevated'}
        `
			);
		} else {
			return classes(`nu-progress-circular--${classType}`);
		}
	};

	const getStyles = () => {
		const bgStyle = !disabled && color ? `--selector-bg: ${color || ''};` : '';
		return `${bgStyle}`;
	};
</script>

<div
	{id}
	aria-valuemin="0"
	role="progressbar"
	aria-valuemax="100"
	aria-valuenow={normalizedValue}
	class={getClasses('progress', darkProp)}
	style={getStyles() + styleToString({ width: `${size + 9}px`, height: `${size + 9}px` })}
>
	<div
		class={getClasses('svg', darkProp)}
		style={styleToString({
			width: `${size}px`,
			height: `${size}px`,
			transform: `translate3d(-50%, -50%, 0) rotate(${normalizedRotation}deg)`
		})}
	>
		<svg
			class={indeterminate ? getClasses('indeterminate', darkProp) : ''}
			xmlns="http://www.w3.org/2000/svg"
			{viewBox}
		>
			<circle
				r={radius}
				cx={2 * viewBoxSize}
				cy={2 * viewBoxSize}
				class={getClasses('circle', darkProp)}
				style={styleToString({
					strokeWidth: `${width}`,
					strokeDasharray: strokeDashArray,
					strokeDashoffset: indeterminate
						? calcStrokeDashArrayOffset(0)
						: strokeDashArrayOffset
				})}
			/>
		</svg>
	</div>
	<div
		class={getClasses('outer', darkProp)}
		style={styleToString({ width: `${size + 5}px`, height: `${size + 5}px` })}
	/>
	<div
		class={getClasses('inner', darkProp)}
		style={styleToString({
			width: `${size - width * 2 - 6}px`,
			height: `${size - width * 2 - 6}px`
		})}
	/>
	<label
		class={getClasses('label', darkProp)}
		style={styleToString({ fontSize: `${radius * 0.6}px` })}
	>
		{#if $$slots.default}
			<slot />
		{:else}
			{label}
		{/if}
	</label>
</div>
