import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getArt } from '$lib/utils/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
	const post = await getArt(params.slug);
	if (post) return post;

	error(404, 'Not found');
}) satisfies PageLoad;
