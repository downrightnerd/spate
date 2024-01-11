<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';
	import Image from '/src/customComponents/Image.svelte';

	export let data: PageData;
</script>

<section class="post">
	<div class="post__container">
		<h1 class="post__title">{data.title}</h1>

		<div class="post__content">
			<PortableText
				value={data.body}
				components={{
					types: { image : Image  }
				}}
			/>
		</div>
	</div>
</section>
