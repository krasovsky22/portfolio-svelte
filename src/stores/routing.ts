import { page } from '$app/stores';
import { derived } from 'svelte/store';
import { SvelteIcon, BracketsIcon } from '@components/icons';
import type { Component } from 'svelte';

type DOCUMENT_TYPE = {
	icon: Component;
	display: string;
	isActive: boolean;
	url: POSSIBLE_ROUTES;
};

type ROUTE_TYPE = {
	id: string;
	title: string;
	description: string;
};

export enum POSSIBLE_ROUTES {
	INDEX = '/',
	WORKS = '/works',
	ABOUTME = '/about',
	SOCIAL = '/social'
}

const documents: DOCUMENT_TYPE[] = [
	{
		isActive: false,
		icon: SvelteIcon,
		display: 'Index.svelte',
		url: POSSIBLE_ROUTES.INDEX
	},
	{
		isActive: false,
		icon: SvelteIcon,
		display: 'AboutMe.svelte',
		url: POSSIBLE_ROUTES.ABOUTME
	},
	{
		isActive: false,
		icon: BracketsIcon,
		display: 'Social.json',
		url: POSSIBLE_ROUTES.SOCIAL
	}
	// {
	//     isActive: false,
	// 	icon: SvelteIcon,
	// 	display: 'Works.svelte',
	// 	url: POSSIBLE_ROUTES.WORKS
	// }
];

export const Routes: Record<POSSIBLE_ROUTES | string, ROUTE_TYPE> = {
	[POSSIBLE_ROUTES.INDEX]: {
		id: POSSIBLE_ROUTES.INDEX,
		title: 'Vlad Krasovsky Portfolio',
		description: 'Vlad Krasovsky Portfolio'
	},
	[POSSIBLE_ROUTES.ABOUTME]: {
		id: POSSIBLE_ROUTES.INDEX,
		title: 'Vlad Krasovsky About Me',
		description: 'Vlad Krasovsky About Me'
	}
};

export const pageDocuments = derived(
    page,
    $page => documents.map(document => {
        return ({
            ...document,
            isActive: document.url === $page.route.id
        });
    })
);

export const activePage = derived(page, ($page) =>
	documents.find((document) => document.url === $page.route.id)
);
