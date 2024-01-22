<script lang="ts">
	import Typography from '../Typography.svelte';
	import type { TypographyProps } from '../Typography.types';
	import '../Typography.css';

	type $$Props = Omit<TypographyProps, 'type'>;
</script>

<Typography {...$$props} {...$$restProps} type="h2">
	<slot />
</Typography>
