<script lang="ts">
	import { XIcon } from '@/components/icons';
	import { siteLayout } from '@/stores/site-layout';
	import { ConsoleTab, ProblemsTab } from './console-container-tabs';

	type TAB = {
		name: string;
		component?: any;
	};

	const consoleTabs: TAB[] = [
		{
			name: 'TERMINAL',
			component: ConsoleTab
		},
		{
			name: 'OUTLENS'
		},
		{
			name: 'SQL CONSOLE'
		},
		{
			name: 'PROBLEMS',
			component: ProblemsTab
		},
		{
			name: 'OUTPUT'
		},
		{
			name: 'DEBUG CONSOLE'
		}
	];

	let activeTab = $state(0);

	const SvelteComponent = $derived(consoleTabs[activeTab].component);
</script>

<div
	class="border-y border-black-lighter h-1/5 min-h-[100px] flex flex-col gap-2 px-1 pl-3 text-xs text-black-lighter overflow-auto"
>
	<div class="flex flex-row justify-between">
		<div class="flex flex-row flex-grow gap-3 items-center">
			{#each consoleTabs as { name }, index}
				<button
					class="px-2 hover:text-gray-200 cursor-pointer border-black-lighter"
					class:border-b-2={activeTab === index}
					title={name}
					onclick={() => (activeTab = index)}
				>
					{name}
				</button>
			{/each}
		</div>
		<button
			class="cursor-pointer hover:bg-black-lighter hover:text-gray-200"
			onclick={() => ($siteLayout.showConsoleBar = false)}
		>
			<XIcon />
		</button>
	</div>
	<div class="flex-grow text-gray-400">
		<SvelteComponent />
	</div>
</div>

<style>
	::-webkit-scrollbar {
		box-shadow: inset 0 0 5px grey;
		background: transparent;
		width: 10px;
	}

	::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.699);
	}
</style>
