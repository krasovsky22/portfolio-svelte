import { type Message } from '@ai-sdk/svelte';
import { writable } from 'svelte/store';

export const messages = writable<Message[]>([]);
