<script lang="ts">
	import ThemeProvider from '@lib/theme/ThemeProvider.svelte';
	import { Header } from '@components/header';
	import { Footer } from '@components/footer';
	import { Card, Divider } from '@lib';
	import '@lib/index.css';
	import '../app.css';

	const onMenuClick = () => {
		console.log('menu click');
	};
</script>

<ThemeProvider>
	<Card
		container
		style="height: calc(100vh);"
		class="relative flex min-h-screen flex-col bg-background"
	>
		<Card flat class="p-6">
			<Card>
				<Card flat class="px-6">
					<Header on:menuclick={onMenuClick} on:darkchange={onMenuClick} />
				</Card>
				<Divider dense />
				<Card flat class="p-6" style="height: calc(100vh - 130px);overflow-y: auto;">
					<slot />
				</Card>
				<Card flat>
					<Footer />
				</Card>
			</Card>
		</Card>
	</Card>
</ThemeProvider>
