<script lang="ts">
	import { classes } from '@lib/utils/cs';
	import { getTheme } from '@lib/theme/theme-fn';
	import { normalize } from '@lib/utils/fn';
	import './Card.css';

	export let dark = false;
	export let rounded = false;

	const theme = getTheme();

	$: darkProp = dark || $theme?.dark || false;
	$: roundedProp = rounded || false;

	const getClasses = (classType: string, isDark: boolean) => {
		switch (classType) {
			case 'wrapper':
				return classes(`
                    nu-card-header
                    nu-card-header--${isDark ? 'dark' : 'light'}
                    ${roundedProp ? 'nu-card-header--rounded' : ''}
                    ${normalize($$restProps.class)}
                `);
			case 'content':
				return classes('nu-header-content');
			case 'avatar':
				return classes('nu-header-avatar');
			case 'content-left':
				return classes('nu-header-content nu-header-content--left');
		}
	};
</script>

<div {...$$restProps} class={getClasses('wrapper', darkProp)}>
	{#if $$slots.avatar || $$slots.title || $$slots.subtitle || $$slots.action}
		<div class={getClasses('content', darkProp)}>
			<div class={getClasses('content-left', darkProp)}>
				{#if $$slots.avatar}
					<div class={getClasses('avatar', darkProp)}>
						<slot name="avatar" />
					</div>
				{/if}
				<div>
					<slot name="title" />
					<slot name="subtitle" />
				</div>
			</div>
			<slot name="action" />
		</div>
	{/if}
	<slot />
</div>
