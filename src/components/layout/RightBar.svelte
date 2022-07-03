<script>
	import { XIcon } from '../icons';
	import { siteLayout } from '@/stores/site-layout';
</script>

<div class="flex flex-col text-xs h-full items-center border-l border-black p-1 px-3">
	<div class="flex w-full">
		<div
			class="ml-auto cursor-pointer hover:bg-black-lighter"
			on:click={() => ($siteLayout.showRightBar = !$siteLayout.showRightBar)}
		>
			<XIcon />
		</div>
	</div>
	<div class="flex flex-grow justify-center items-center">Nothing here to display.</div>
</div>
