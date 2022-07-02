import { page } from '$app/stores';
import { derived } from 'svelte/store';
import { SvelteIcon, BracketsIcon } from '@components/icons';

type DOCUMENT_TYPE = {
	icon: any;
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

const urlToRouteId = (url: string): POSSIBLE_ROUTES | string => url.replace('/', '');

export const pageDocuments = derived(
    page,
    $page => documents.map(document => ({
        ...document,
        isActive: urlToRouteId(document.url) === $page.routeId
    }))
);

export const activePage = derived(
    page,
    $page => documents.find(document => urlToRouteId(document.url) === $page.routeId)
)
