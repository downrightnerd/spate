<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="post">
	<div class="post__container">
		<h1 class="post__title">{data.title}</h1>
		<p class="post__excerpt">{data.excerpt}</p>
		<img
			class="post__cover"
			src={urlFor(data.mainImage).url()}
			alt="Cover image for {data.title}"
		/>
		<div class="post__content">
			<PortableText value={data.body} />
		</div>
	</div>
</section>
