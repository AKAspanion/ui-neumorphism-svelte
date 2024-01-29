<script lang="ts">
	import { SelectionControl } from '../selection-control';
	import './Checkbox.css';
</script>

<SelectionControl {...$$restProps} type="checkbox" on:change on:click>
	<slot slot="label" name="label" />
</SelectionControl>
