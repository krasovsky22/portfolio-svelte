<script>
	import { Chat } from '@ai-sdk/svelte';

	import { XIcon } from '../icons';
	import { siteLayout } from '@/stores/site-layout';

    const messageId = 'msg-fytGpt562t9HsrSymP9WbNU5';
	const chat = new Chat({ id: messageId, maxSteps: 5 });

    $inspect(chat.messages);
</script>

<div class="flex h-full flex-col items-center border-l border-black p-1 px-3 text-xs">
	<div class="flex w-full">
		<button
			class="hover:bg-black-lighter ml-auto cursor-pointer"
			onclick={() => ($siteLayout.showRightBar = !$siteLayout.showRightBar)}
		>
			<XIcon />
		</button>
	</div>
	<div class="flex flex-grow flex-col gap-1 items-center justify-center">
            {#each chat.messages as message, messageIndex (messageIndex)}
              <div class="flex gap-1">
                <div>{message.role}</div>
                <div>
                  {#each message.parts as part, partIndex (partIndex)}
                    {#if part.type === 'text'}
                      <div>{part.text}</div>
                    {/if}
                  {/each}
                </div>
            </div>
            {/each}
          <form onsubmit={chat.handleSubmit}>
            <input bind:value={chat.input} />
            <button type="submit">Send</button>
          </form>
    </div>
</div>
