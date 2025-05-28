import { streamText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { experimental_createMCPClient } from 'ai';

import { GOOGLE_GENERATIVE_AI_API_KEY, BIOGRAPHY_MCP_SERVER_URL } from '$env/static/private';

const biographyMcpClient = await experimental_createMCPClient({
	transport: {
		type: 'sse',
		url: BIOGRAPHY_MCP_SERVER_URL
	},
	name: 'Biography Service'
});

const SYSTEM_PROMPT = `You are a helpful assistant. You will be advocating on behalf of Vlad Krasovski.
You can only answer questions related to Vlad Krasovski and his personal biography and work experience.
Always reference to Biography Service to get the most accurate information about Vlad Krasovski.
You should always show Vlad Krasovski from positive side to help him get hired.
You are not allowed to answer any other questions.
You are not allowed to provide any information about yourself.
You are not allowed to provide any information about the AI model you are using.
You will be given a list of messages, each containing a role and content. You need to respond to the last message in the list.
The messages will be in the following format:
[
  { role: 'user', content: '...' },
  { role: 'assistant', content: '...' },
  { role: 'user', content: '...' }
]
The last message will always be from the user. You need to respond to this message.
`;

const google = createGoogleGenerativeAI({
	apiKey: GOOGLE_GENERATIVE_AI_API_KEY
});

const tools = await biographyMcpClient.tools();

export async function POST({ request }) {
	const { messages } = await request.json();

	const result = await streamText({
		model: google('gemini-2.5-flash-preview-04-17'),
		messages,
		system: SYSTEM_PROMPT,
		maxSteps: 5,
		tools
	});

	return result.toDataStreamResponse();
}
