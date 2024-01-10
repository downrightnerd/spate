<script lang="ts">
	import Tooltip from './Tooltip.svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { Post } from '$lib/utils/sanity';

	export let post: Post;
</script>

<div class="card">
	<a class="card__link" href={`/post/${post.slug.current}`}>
		<div class="card__container">
				{post.title}
		</div>
	</a>
</div>
