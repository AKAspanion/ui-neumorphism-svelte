<script lang="ts">
	import { SelectionControl } from '../selection-control';
	import './Switch.css';
</script>

<SelectionControl {...$$restProps} type="switch" on:change on:click>
	<slot slot="label" name="label" />
</SelectionControl>
