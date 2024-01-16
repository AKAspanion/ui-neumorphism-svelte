<script lang="ts">
	import { Card, H2 } from '@lib/components';

	console.log('%cUI-Neumorphism', 'color: #2979FF;font-size:60px;');
	console.log('If you like it, consider giving a ⭐ on github! 😄');
</script>

<Card flat container class="p-6">
	<Card class="p-6">
		<H2 className="help" style="color: var(--primary);">UI-Neumorphism</H2>
		<h1>Welcome to your library project</h1>
		<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	</Card>
</Card>
