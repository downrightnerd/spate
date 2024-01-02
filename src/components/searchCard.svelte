<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { Post } from '$lib/utils/sanity';

	export let post: Post;
</script>

<li class="card__container">
	<a class="card__link" href={`/post/${post.slug.current}`}>
		{#if post.mainImage}
			<img
				class="card__cover"
				src={urlFor(post.mainImage).width(500).height(400).url()}
				alt="Cover image for {post.title}"
			/>
		{/if}
	</a>
</li>

<style>
	.card__container a,
	h3 {
		color: black;
		font-weight: 400;
		font-family: Arial, Helvetica, sans-serif;
		text-decoration: none;
		padding-top: 5px;
	}
	.card__title {
		font-size: 16px;
	}

	.card__container {
		display: inline-block;
		width: fit-content;
		margin: 20px;
	}
	.card__cover {
		width: 100%;
	}

	.card__title {
		text-align: right;
		margin: 0;
		line-height: 12px;
	}

	@media (max-width: 768px) {
	}
</style>
