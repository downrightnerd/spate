<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { Art } from '$lib/utils/sanity';

	export let art: Art;
</script>

<div class="card">
	<div class="card__container">
		<a class="card__link" href={`/post/${art.slug.current}`}>
			<p class="card__date">
				{formatDate(art._createdAt)}
			</p>
			<h3 class="card__title">
				{art.title}
			</h3>
			<img
				class="card__cover"
				src={urlFor(art.mainImage).width(500).height(500).url()}
				alt="Cover image for {art.title}"
			/>
			<p class="card__excerpt">{art.excerpt}</p>
		</a>
	</div>
</div>
