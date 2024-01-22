<script lang="ts">
	import { SelectionControl } from '../selection-control';
	import './Radio.css';
</script>

<SelectionControl {...$$restProps} type="radio" on:change on:click>
	<slot slot="label" name="label" />
</SelectionControl>
