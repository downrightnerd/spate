<script lang="ts">
	import Card from '/src/components/card-two.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<section style="margin-top:50px;">
	{#each data.arts as chapterTwo}
			<Card {chapterTwo} />
		{/each}
</section>
