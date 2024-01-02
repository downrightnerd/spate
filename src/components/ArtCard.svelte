<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { Art } from '$lib/utils/sanity';

	export let art: Art;
</script>

<table class="card">
	<a class="card__link" href={`/post/${art.slug.current}`}>
		<tr class="card__container">
			<td on:mouseenter={() => {}} class="card__title">
				{art.title}
			</td>
			<td class="card__excerpt">{art.excerpt}</td>
			<td class="card__date">
				{formatDate(art._createdAt)}
			</td>
		</tr>
	</a>
</table>
