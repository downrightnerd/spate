<script lang="ts">
	import Card from '/src/components/ArtCard.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<section>
	{#if data.arts.length}
		{#each data.arts as art}
			<Card {art} />
		{/each}
	{/if}
</section>
