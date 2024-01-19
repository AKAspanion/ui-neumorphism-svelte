<script lang="ts">
	import type { AlertProps } from './Alert.types.ts';
	import { classes } from '@lib/utils/cs';
	import { normalize } from '@lib/utils/fn';
	import { Card } from '../card';
	import { Spacer } from '../spacer';
	import { IconButton } from '../icon-button';
	import { createEventDispatcher } from 'svelte';
	import './Alert.css';

	let dispatch = createEventDispatcher();

	type $$Props = AlertProps;

	export let type = 'info';
	export let border = 'none';
	export let dense = false;
	export let rounded = false;
	export let closable = false;
	export let outlined = false;

	const getClasses = (name: string) => {
		switch (name) {
			case 'alert':
				return classes(`
                    nu-alert
                    ${dense ? 'nu-alert--dense' : ''}
                    ${type ? `nu-alert--${type}` : ''}
                    ${outlined ? 'nu-alert--outlined' : ''}
                    ${closable ? 'nu-alert--closable' : ''}
                    ${border ? `nu-alert--border-${border}` : ''}
                    ${normalize($$restProps.class)}
                `);
			default:
				return classes(name);
		}
	};
</script>

<Card {...$$restProps} class={getClasses('alert')}>
	{#if !dense && $$slots.icon}
		<span class={getClasses('nu-alert-icon')}>
			<slot name="icon" />
		</span>
	{/if}
	<div class={getClasses('nu-alert-children')}>
		<slot />
	</div>
	<Spacer />
	{#if closable}
		<IconButton
			size="small"
			{rounded}
			outlined={false}
			bordered={false}
			class={getClasses('nu-alert-close')}
			on:click={() => dispatch('close', false)}
		>
			<slot name="closeIcon">
				<div class={getClasses('nu-alert-close--icon')}>×</div>
			</slot>
		</IconButton>
	{/if}
</Card>
