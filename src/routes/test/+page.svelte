<script lang="ts">
	import { H2, Alert, H6 } from '@lib';
	import Icon from '@lib/components/icon/Icon.svelte';
	import { mdiCheckCircle } from '@mdi/js';
</script>

<div class="">
	<div>------------------------------------------------------------------------------</div>
	<H6>Alert</H6>
	<div class="mb-4" />
	<Alert type="success">I'm a success alert.</Alert>
	<div class="mb-4" />
	<Alert type="success" closable rounded>
		<p>I'm a success alert.</p>
		<div slot="icon">
			<Icon path={mdiCheckCircle} size={1} />
		</div>
	</Alert>
	<div class="mb-4" />
	<Alert type="error" closable>
		<p>I'm a success alert.</p>
		<div slot="icon">
			<Icon path={mdiCheckCircle} size={1} />
		</div>
	</Alert>
	<div class="mb-4" />
	<Alert type="info" closable>
		<p>I'm a success alert.</p>
		<div slot="icon">
			<Icon path={mdiCheckCircle} size={1} />
		</div>
	</Alert>
	<div class="mb-4" />
	<Alert type="warning" closable>
		<p>I'm a success alert.</p>
		<div slot="icon">
			<Icon path={mdiCheckCircle} size={1} />
		</div>
	</Alert>
</div>
