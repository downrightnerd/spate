import { getArts } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from '../$types';

export const load = (async () => {
	const arts = await getArts();

	if (arts) {
		return {
			arts
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
