<script lang="ts">
	import Card from '/src/components/ArtCard.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<section style="margin-top:50px;">
	{#if data.posts.length}
		{#each data.posts as chapterTwo}
			<Card {chapterTwo} />
		{/each}
	{/if}
</section>
