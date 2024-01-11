<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<section class="post">
	<div class="post__container">
		<h1 class="post__title">{data.title}</h1>

		<div class="post__content">
			<PortableText
				value={data.body}
				components={{
					types: {}
				}}
			/>
		</div>
	</div>
</section>
