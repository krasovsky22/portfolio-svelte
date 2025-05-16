<script lang="ts">
	import { Modals } from 'svelte-modals';
	import Toggle from '@components/Toggle.svelte';
	import Modal from '@components/shared/Modal.svelte';

	import { toggleDarkMode, siteLayout } from '@stores/site-layout';
</script>

<Modals>
	{#snippet backdrop({ close })}
		<Modal isOpen title="User Settings" {close}>
			<div class="flex w-[20vw] items-center justify-center">
				<div class="m-5 flex w-full">
					<Toggle checked={$siteLayout.darkMode} onClick={toggleDarkMode}>Dark Mode</Toggle>
				</div>
			</div>
		</Modal>
	{/snippet}
</Modals>
