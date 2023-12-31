import { getPosts } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = true;
export const load = (async () => {
	const posts = await getPosts();

	if (posts) {
		return {
			posts
		};
	}

	error(404, 'Not found');
}) satisfies PageLoad;
