<script lang="ts">
	import { onMount } from 'svelte';
	import Documents from './Documents.svelte';

	let commandInput: HTMLDivElement | null = $state(null);

	type INSERTED_COMMAND = {
		hasWorkstation: boolean;
		text: string;
		container?: any;
	};
	let consoleInsertedCommands: INSERTED_COMMAND[] = $state([]);

	onMount(() => {
		commandInput?.focus();
	});

	const handleInsertedCommand = async (command: string) => {
		if (command.startsWith('cd')) {
			consoleInsertedCommands = [
				...consoleInsertedCommands,
				{
					hasWorkstation: false,
					text: 'cd: no such file or directory: ' + command.replace('cd', '').trim()
				}
			];
			return;
		}

		if (command.startsWith('ls')) {
			consoleInsertedCommands = [
				...consoleInsertedCommands,
				{
					hasWorkstation: false,
					text: '',
					container: Documents
				}
			];
			return;
		}

		if (command.startsWith('clear')) {
			consoleInsertedCommands = [];
			return;
		}

		if (command.startsWith('cat')) {
			const response = await fetch(
				`https://raw.githubusercontent.com/krasovsky22/portfolio-svelte/master/${command
					.replace('cat', '')
					.trim()}`
			);
			let text = '';

			if (command.includes('.json')) {
				text = await response.json();
				if (typeof text === 'object') {
					text = JSON.stringify(text, null, 4);
				}
			} else {
				text = await response.text();
			}

			consoleInsertedCommands = [
				...consoleInsertedCommands,
				{
					hasWorkstation: false,
					text
				}
			];
			return;
		}

		consoleInsertedCommands = [
			...consoleInsertedCommands,
			{
				hasWorkstation: false,
				text: 'zsh: command not found: ' + command.trim()
			}
		];
	};

	const handleKeyUp = (event: any) => {
		if (event.code == 'Enter') {
			event.preventDefault();
			const value = event?.target?.textContent ?? '';
			consoleInsertedCommands = [...consoleInsertedCommands, { hasWorkstation: true, text: value }];
			handleInsertedCommand(value);
			event.target.textContent = '';
			return false;
		}
	};
</script>

<div class="flex flex-col w-full">
	{#each consoleInsertedCommands as { hasWorkstation, text, container }}
		<div class="flex flex-row gap-2">
			{#if hasWorkstation}
				<div>vladkrasovsky@workstation portfolio-svelte</div>
				<div>%</div>
			{/if}
			{#if container}
				{@const SvelteComponent = container}
				<SvelteComponent />
			{/if}
			<div>{text}</div>
		</div>
	{/each}
	<div class="flex flex-row gap-2">
		<div>vladkrasovsky@workstation portfolio-svelte</div>
		<div>%</div>
		<div class="flex-grow">
			<div
				contenteditable="true"
				class="w-full bg-transparent border-none outline-none"
				bind:this={commandInput}
				onkeydown={handleKeyUp}
				role="textbox"
                tabindex="0"
			></div>
		</div>
	</div>
</div>
