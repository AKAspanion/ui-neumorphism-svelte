<script lang="ts">
	import { normalize } from '@lib/utils/fn';
	import './Carousel.css';
</script>

<div {...$$restProps} class={`nu-carousel-item ${normalize($$restProps.class)}`}>
	<slot />
</div>
