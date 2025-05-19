<script>
	import { Chat } from '@ai-sdk/svelte';
	import { messages } from '@stores/chat';
	import { siteLayout } from '@stores/site-layout';
	import { SendIcon, XIcon, ToolsIcon } from '@icons';
	import Account from '../icons/Account.svelte';

	const chat = new Chat({ maxSteps: 5 });
</script>

{#snippet chatUser()}
	<Account size={14}></Account>
	<span class="my-auto text-[10px]">User</span>
{/snippet}

{#snippet chatAssistant()}
	<ToolsIcon size={14}></ToolsIcon>
	<span class="my-auto text-[10px]">Github Copilot</span>
{/snippet}

<div class="flex h-full max-w-[400px] flex-col border-l border-[#404040] bg-[#1e1e1e] text-sm">
	<!-- Header bar -->
	<div class="flex w-full border-b border-[#404040] bg-[#252526]">
		<button
			class="ml-auto cursor-pointer rounded p-1 hover:bg-[#404040]"
			onclick={() => ($siteLayout.showRightBar = !$siteLayout.showRightBar)}
		>
			<XIcon />
		</button>
	</div>

	<!-- Messages window -->
	<div class="flex flex-1 flex-grow flex-col gap-2 overflow-y-auto p-2 text-[12px]">
		{#each chat.messages as message, messageIndex (messageIndex)}
			<div
				class="flex flex-col gap-2 {message.role === 'assistant'
					? 'bg-[#2c2c2c]'
					: ''} rounded-lg p-3"
			>
				<div class="align-items-center flex gap-1 font-semibold text-[#4e94ce] capitalize">
					{@render (message.role === 'assistant' ? chatAssistant : chatUser)()}
				</div>
				<div class="text-[#cccccc]">
					{#each message.parts as part, partIndex (partIndex)}
						{#if part.type === 'text'}
							<div class="whitespace-pre-wrap">{part.text}</div>
						{/if}
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<!-- Send message footer card -->
	<div class="flex w-full self-end border-t border-[#404040] bg-[#252526] p-4">
		<form
			onsubmit={chat.handleSubmit}
			class="flex w-full flex-col gap-2 rounded border border-[#565656] bg-[#3c3c3c] px-2 py-1"
		>
			<div class="flex w-full items-center gap-2 px-3 py-2">
				<input
					bind:value={chat.input}
					class="flex-1 bg-transparent text-[#cccccc] placeholder-[#848484] outline-none"
					placeholder="Ask Copilot..."
				/>
			</div>
			<div class="align-items-center ml-auto flex flex-1 justify-between gap-3">
				<span class="font-family-[system-ui] my-auto text-[10px]">Ask</span>
				<span class="font-family-[system-ui] my-auto text-[10px]"
					>gemini-2.5-flash-preview-04-17</span
				>
				<button
					type="submit"
					class="flex h-6 w-6 cursor-pointer items-center justify-center justify-self-end rounded text-sm hover:bg-[#404040]"
					title="Send (Enter)"
				>
					<SendIcon class="text-[#848484]" size={16} />
				</button>
			</div>
		</form>
	</div>
</div>
