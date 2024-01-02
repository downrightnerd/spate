<script lang="ts">
	import Card from '/src/components/searchCard.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let searchTerm = ''.toLowerCase();
	$: searchedPosts = data.posts.filter((data) => {
		let tags = JSON.stringify(data.myTags);
		let body = JSON.stringify(data.body);
		return (
			data.title?.toLowerCase().includes(searchTerm) ||
			data.title?.includes(searchTerm) ||
			data.excerpt?.includes(searchTerm) ||
			tags?.includes(searchTerm) ||
			body?.includes(searchTerm)
		);
	});
</script>

<div class="searchForm">
	<input type="text" placeholder="Search" bind:value={searchTerm} />
</div>

<section class="search-posts">
	{#each searchedPosts as post}
		<Card {post} />
	{/each}
</section>

<style>
	.search-posts {
		display: block;
	}
	.searchForm {
		text-align: left;
		margin-bottom: 20px;
		margin-left: 20px;
		margin-top: 5px;
	}
	input::placeholder {
		color: black;
		font-size: 18px;
		font-family: Arial, Helvetica, sans-serif;
	}
	input {
		width: 200px;
		border: 0;
		height: 25px;
		border: 1px solid black;
	}
</style>
