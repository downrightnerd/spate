<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { Post } from '$lib/utils/sanity';

	export let post: Post;
</script>

<div class="card">
	<div class="card__container">
		<a class="card__link" href={`/post/${post.slug.current}`}>
			<p class="card__date">
				{formatDate(post._createdAt)}
			</p>
			<h3 class="card__title">
				{post.title}
			</h3>
			{#if post.mainImage}
				<img
					class="card__cover"
					src={urlFor(post.mainImage).width(500).height(500).url()}
					alt="Cover image for {post.title}"
				/>
			{/if}
			<p class="card__excerpt">{post.excerpt}</p>
		</a>
	</div>
</div>
