<script lang="ts">
	import Card from '/src/components/ArtCard.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<table class="card">
	<tr class="card__container">
		<td
			style="text-align:left; font-weight:normal; font-size:12px; border-bottom:0.5px solid black;"
			class="card__title">Title</td
		>
		<td
			style="text-align:left; font-weight:normal;font-size:12px; border-bottom:0.5px solid black;"
			class="card__excerpt">In-short</td
		>
		<td
			style="text-align:left; font-weight:normal; font-size:12px; border-bottom:0.5px solid black;"
			class="card__date">Publish-date</td
		>
	</tr>
</table>

<section>
	{#if data.arts.length}
		{#each data.arts as art}
			<Card {art} />
		{/each}
	{/if}
</section>
