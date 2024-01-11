<script lang="ts">
	import Tooltip from './Tooltip.svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { chapterOne } from '$lib/utils/sanity';

	export let chapterOne: chapterOne;
</script>

<div class="card">
	<a class="card__link" href={`/post/${chapterOne.slug.current}`}>
		<div class="card__container">
				{chapterOne.title}
		</div>
	</a>
</div>
