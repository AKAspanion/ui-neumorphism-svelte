<script lang="ts">
	import { Avatar, Alert, H6, Badge } from '@lib';
	import Icon from '@lib/components/icon/Icon.svelte';
	import { mdiBell, mdiCalendar, mdiCheckCircle, mdiFolder } from '@mdi/js';
</script>

<div>
	<div>------------------------------------------------------------------------------</div>
	<H6>Badge</H6>
	<div class="mb-6" />
	<div class="flex gap-6">
		<Badge content={2}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge content={3}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge content={4}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge dot content={2}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge dot content={3}>Alert</Badge>
		<Badge bordered overlap content={2}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge bordered overlap dot content={3}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge bordered overlap content={4}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge overlap left bottom content={2}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge overlap left content={3}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge overlap bottom content={2}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge overlap content={3}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge overlap max={49} content={49}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge overlap max={99} content={200}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge overlap max={999} content={1000}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge left inline content={2}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge inline content={3}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge left square content={2}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge square content={3}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge bgColor="var(--error)" content={3}>
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge content={2} color="var(--error)" bgColor="var(--white)">
			<Icon path={mdiBell} size={1} />
		</Badge>
		<Badge
			bordered
			content={4}
			color="var(--error)"
			bgColor="var(--white)"
			borderColor="var(--success)"
		>
			<Icon path={mdiBell} size={1} />
		</Badge>
	</div>

	<div>------------------------------------------------------------------------------</div>
	<H6>Avatar</H6>
	<div class="flex gap-6">
		<Avatar square bgColor="var(--warning)">
			<Icon path={mdiFolder} size={1} />
		</Avatar>
		<Avatar rounded bgColor="var(--success)">
			<Icon path={mdiCalendar} size={1} />
		</Avatar>
		<Avatar src="broken.jpg" alt="Ankit Kumar Pandit">AK</Avatar>
		<Avatar src="broken.jpg" alt="Ankit Kumar Pandit" />
		<Avatar
			alt="Ankit Kumar Pandit"
			src="https://lh3.googleusercontent.com/a-/AAuE7mCIyihYk1lPElmGoTqL4Pvb9PD3RT3x-EB2WUb6"
		/>
		<Avatar src="broken.jpg" /><Avatar
			size="small"
			src="https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg"
		/>
		<Avatar
			size="medium"
			alt="Ankit Kumar Pandit"
			src="https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg"
		/>
		<Avatar
			size="large"
			src="https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg"
		/>
		<Avatar
			size={120}
			src="https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg"
		/>
	</div>
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
