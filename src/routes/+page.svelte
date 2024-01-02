<script lang="ts">
	import Card from '../components/Card.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<section>
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
	{#each data.posts as post}
		<Card {post} />
	{/each}
</section>

<style>
	@media (max-width: 768px) {
		td.card__excerpt {
			display: none;
		}
	}
</style>
