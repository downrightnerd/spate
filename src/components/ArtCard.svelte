<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { Art } from '$lib/utils/sanity';

	export let art: Art;
</script>

<div class="card">
	<a class="card__link" href={`/post/${art.slug.current}`}>
		<div class="card__container">
				{art.title}
		</div>
	</a>
</div>
