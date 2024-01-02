<script lang="ts">
	import Tooltip from './Tooltip.svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { Post } from '$lib/utils/sanity';

	export let post: Post;
</script>

<table class="card">
	<a class="card__link" href={`/post/${post.slug.current}`}>
		<tr class="card__container">
			<td on:mouseenter={() => {}} class="card__title">
				{post.title}
			</td>
			<td class="card__excerpt">{post.excerpt}</td>
			<td class="card__date">
				{formatDate(post._createdAt)}
			</td>
		</tr>
	</a>
</table>
