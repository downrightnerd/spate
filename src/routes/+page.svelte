<script lang="ts">
	import Card from '../components/card-one.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<section style="margin-top:50px;">
	{#each data.posts as chapterOne}
		<Card {chapterOne} />
	{/each}
</section>


