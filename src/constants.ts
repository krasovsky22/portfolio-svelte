type ROUTE_TYPE = {
	id: string;
	title: string;
	description: string;
};

export enum POSSIBLE_ROUTES {
	INDEX = '/',
	PROFILE = '/profile'
}

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
