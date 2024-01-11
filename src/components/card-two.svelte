<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { chapterTwo } from '$lib/utils/sanity';

	export let chapterTwo: chapterTwo;
</script>

<div class="card">
	<a class="card__link" href={`/post-two/${chapterTwo.slug.current}`}>
		<div class="card__container">
			{chapterTwo.title}
		</div>
	</a>
</div>
