import type { PortableTextBlock } from '@portabletext/types';
import { createClient } from '@sanity/client';
import type { Image, ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-20' // date of setup
});

export async function getPosts(): Promise<chapterOne[]> {
	return await client.fetch(
		groq`*[_type in ["chapterOne"] && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getPost(slug: string): Promise<chapterOne> {
	return await client.fetch(groq`*[_type in ["chapterOne"] && slug.current == $slug][0]`, {
		slug
	});
}

export async function getArts(): Promise<chapterTwo[]> {
	return await client.fetch(
		groq`*[_type == "chapterTwo" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getArt(slug: string): Promise<chapterTwo> {
	return await client.fetch(groq`*[_type == "chapterTwo" && slug.current == $slug][0]`, {
		slug
	});
}

export interface chapterOne {
	_type: 'chapterOne';
	_createdAt: string;
	title?: string;
	slug: Slug;
	excerpt?: string;
	mainImage?: ImageAsset;
	body: PortableTextBlock[];
	myTags: string;
}

export interface chapterTwo {
	_type: 'chapterTwo';
	_createdAt: string;
	title?: string;
	slug: Slug;
	excerpt?: string;
	mainImage?: ImageAsset;
	body: PortableTextBlock[];
	myTags: string;
}
