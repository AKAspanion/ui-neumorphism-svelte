<script lang="ts">
	import Typography from '../Typography.svelte';
	import type { TypographyProps } from '../Typography.types';

	type $$Props = Omit<TypographyProps, 'type'>;
</script>

<Typography {...$$props} {...$$restProps} type="body-1">
	<slot />
</Typography>
