<script lang="ts">
	import { Chat } from '@ai-sdk/svelte';
	import { siteLayout, toggleRightBar } from '@stores/site-layout';
	import { SendIcon, XIcon, ToolsIcon } from '@icons';
	import Account from '../icons/Account.svelte';

	const chat = new Chat({ maxSteps: 5 });
	let isLoading = false;

	let messagesContainer: HTMLElement;

	function scrollToBottom() {
		if (messagesContainer) {
			messagesContainer.scrollTo({
				top: messagesContainer.scrollHeight,
				behavior: 'smooth'
			});
		}
	}

	// Watch for changes in messages or loading state
	$: if (chat.messages || isLoading) {
		// Use setTimeout to ensure the DOM has updated
		setTimeout(scrollToBottom, 0);
	}

	async function handleSubmit(event: Event) {
		event.preventDefault();
		if (!chat.input.trim()) return;

		console.log('handleSubmit', chat.input);

		isLoading = true;

		try {
			await chat.handleSubmit(event);
		} finally {
			isLoading = false;
		}
	}

</script>

{#snippet chatUser()}
	<Account size={14}></Account>
	<span class="my-auto text-[10px]">User</span>
{/snippet}

{#snippet chatAssistant()}
	<ToolsIcon size={14}></ToolsIcon>
	<span class="my-auto text-[10px]">Github Copilot</span>
{/snippet}

{#if $siteLayout.showRightBar}
	<div
		class:w-[350px]={$siteLayout.isFullScreen} class="flex h-full flex-1 flex-col overflow-hidden border-l"
	>
		<!-- Header bar -->
		<div class="flex w-full items-center border-b ">
			<span class="ml-2 border-b border-orange-400 text-[10px]">CHAT</span>
			<button
				class="ml-auto cursor-pointer rounded p-1 hover:bg-[#404040]"
				onclick={toggleRightBar}
			>
				<XIcon />
			</button>
		</div>
        
		<!-- Notification Alert -->
		<div class="mx-2 mt-2 rounded-lg border-l-4 border-r-4 border-blue-500 bg-gradient-to-r from-blue-900/20 to-blue-800/10 p-3 shadow-sm animate-pulse">
			<div class="flex items-center gap-2">
				<div class="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500/20">
					<div class="h-2 w-2 rounded-full bg-blue-400 animate-ping"></div>
				</div>
				<div class="flex-1 text-center">
					<div class="text-xs font-medium text-blue-500">Live AI Assistant Available</div>
					<div class="mt-1 text-xs">
						Call <a href="tel:+18189185059" class="font-mono font-semibold  animate-pulse hover:text-blue-100 underline cursor-pointer">818-918-5059</a> to talk to my AI assistant prototype.
					</div>
				</div>
                <div class="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500/20">
					<div class="h-2 w-2 rounded-full bg-blue-400 animate-ping"></div>
				</div>
			</div>
		</div>

		<div class="relative z-0 flex flex-1 flex-col">
			<div class="flex h-full flex-col">
				<!-- Messages window -->
				<div
					bind:this={messagesContainer}
					class="scrollbar-custom max-h-[80vh] min-h-[150px] flex-1 overflow-y-auto p-2 text-[12px]"
				>
					<div class="flex flex-col gap-2">
						{#each chat.messages as message, messageIndex (messageIndex)}
							<div
								class="flex flex-col gap-2 {(message.role || isLoading) === 'assistant'
									? 'bg-[#2c2c2c]'
									: ''} rounded-lg p-3"
							>
								<div class="align-items-center flex gap-1 font-semibold text-[#4e94ce] capitalize">
									{@render (message.role === 'assistant' ? chatAssistant : chatUser)()}
								</div>
								<div class="text-gray-500 dark:text-gray-200">
									{#each message.parts as part, partIndex (partIndex)}
										{#if part.type === 'text'}
											<div class="whitespace-pre-wrap">{part.text}</div>
										{/if}
									{/each}
								</div>
							</div>
						{/each}

						{#if isLoading}
							<div class="flex flex-col gap-2 rounded-lg p-3">
								<div class="align-items-center flex gap-1 font-semibold text-[#4e94ce] capitalize">
									{@render chatAssistant()}
								</div>
								<div class="text-gray-500 dark:text-gray-200">
									<div>Github Copilot is thinking...</div>
								</div>
							</div>
						{/if}
					</div>
				</div>

				<!-- Send message footer card -->
				<div class="mt-auto flex w-full self-end border-t border-[#404040]  p-4">
					<form
						onsubmit={handleSubmit}
						class="flex w-full flex-col gap-2 rounded border border-[#565656]  px-2 py-1"
					>
						<div class="flex w-full items-center gap-2 px-2 py-2">
							<input
								bind:value={chat.input}
								class="flex-1 bg-transparent outline-none text-[12px] dark:text-gray-200"
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
								class="flex h-6 w-6 cursor-pointer items-center justify-center justify-self-end rounded text-sm hover:bg-[#404040] disabled:cursor-not-allowed disabled:opacity-50"
								title="Send (Enter)"
								disabled={isLoading}
							>
								<SendIcon class="text-[#848484]" size={16} />
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
{/if}
