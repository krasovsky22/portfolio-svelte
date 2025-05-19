import Redis from 'ioredis';
import type { LayoutServerLoad } from './$types';

import { REDIS_URL } from '$env/static/private';

const redis = new Redis(REDIS_URL);

export const load: LayoutServerLoad = async () => {
	const messages = await redis.get('messages');

	return {
        messages : JSON.parse(messages || '[]'),
    };
};
