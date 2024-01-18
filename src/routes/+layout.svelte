<script lang="ts">
	import { Header } from '@components/header';
	import { Card, Divider } from '@lib';
	import '@lib/index.css';
	import '../app.css';

	const onMenuClick = () => {
		console.log('menu click');
	};
</script>

<div class="relative flex min-h-screen flex-col bg-background" id="page">
	<Card flat container class="p-6">
		<Card>
			<Card flat container class="px-6">
				<Header dark={false} on:menuclick={onMenuClick} on:darkchange={onMenuClick} />
			</Card>
			<Divider dense />
			<Card flat container class="p-6">
				<slot />
			</Card>
			<!-- footer -->
		</Card>
	</Card>
</div>
