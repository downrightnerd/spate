<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte';

	interface FootnoteProps {
		_key: string;
		note: PortableTextBlocks;
	}

	export let portableText: MarkComponentProps<
		FootnoteProps,
		// Use the second argument to specify your context's type
		{
			footnotes: FootnoteProps[];
		}
	>;

	// From the context, let's figure out what's the position of this footnote
	$: number =
		portableText.global.context.footnotes.findIndex(
			(note) => note._key === portableText.value._key
		) + 1;
</script>

<span id="src-{portableText.value._key}">
	<slot /><sup><a href={`#note-${portableText.value._key}`}>{number}</a></sup>
</span>
