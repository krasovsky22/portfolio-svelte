<script lang="ts">
	import Toggle from '@components/Toggle.svelte';
	import Modal from '@components/shared/Modal.svelte';

	import { toggleDarkMode, siteLayout } from '@stores/site-layout';

	const {
		// provided by <Modals />
		// isOpen,
		close
	} = $props();
</script>

<Modal isOpen title="User Settings" {close}>
	<div class="flex w-[20vw] items-center justify-center">
		<div class="m-5 flex w-full">
			<Toggle checked={$siteLayout.darkMode} onClick={toggleDarkMode}>Dark Mode</Toggle>
		</div>
	</div>
</Modal>
