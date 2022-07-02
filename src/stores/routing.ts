import { page } from '$app/stores';
import { derived } from 'svelte/store';
import { SvelteIcon } from '@components/icons';

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
	PROFILE = '/profile'
}

const documents: DOCUMENT_TYPE[] = [
    {
        isActive: true,
		icon: SvelteIcon,
		display: 'Index.svelte',
		url: POSSIBLE_ROUTES.INDEX
	},
	{
        isActive: true,
		icon: SvelteIcon,
		display: 'Profile.svelte',
		url: POSSIBLE_ROUTES.PROFILE
	}
];

export const Routes: Record<POSSIBLE_ROUTES | string, ROUTE_TYPE> = {
	[POSSIBLE_ROUTES.INDEX]: {
		id: POSSIBLE_ROUTES.INDEX,
		title: 'Vlad Krasovsky Portfolio',
		description: 'Vlad Krasovsky Portfolio'
	},
	[POSSIBLE_ROUTES.PROFILE]: {
		id: POSSIBLE_ROUTES.INDEX,
		title: 'Vlad Krasovsky Profile',
		description: 'Vlad Krasovsky Profile'
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
