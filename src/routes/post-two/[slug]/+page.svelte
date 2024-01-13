<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';
	import Image from '/src/customComponents/Image.svelte';
	import Footnote from '/src/customComponents/Footnote.svelte';
	import Link from '/src/customComponents/Link.svelte';

	export let data: PageData;

	// Get all footnotes from markDefs in top-level value
	$: footnotes = data.body.reduce((notes, curBlock) => {
		if (curBlock._type !== 'block' || !curBlock.markDefs?.length) {
			return notes;
		}
		return [...notes, ...curBlock.markDefs.filter((def) => def._type === 'footnote')];
	}, []);
</script>

<section class="post">
	<div class="post__container">
		<h1 class="post__title">{data.title}</h1>

		<div class="post__content">
			<PortableText
				value={data.body}
				components={{
					types: { image: Image },
					marks: {
						footnote: Footnote
					}
				}}
				context={{
					// Pass these footnotes inside the context
					footnotes
				}}
			/>
		</div>
	</div>
</section>

<ol>
	{#each footnotes as note}
		<li id="note-{note._key}">
			<PortableText
				value={note.note}
				components={{
					marks: { link: Link }
				}}
			/>
			<a href="#src-{note._key}">👆</a>
		</li>
	{/each}
</ol>
