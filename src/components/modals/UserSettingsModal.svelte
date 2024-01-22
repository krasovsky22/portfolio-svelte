<script lang="ts">
	import Toggle from '@components/Toggle.svelte';
	import Modal from '@components/shared/Modal.svelte';

	import { siteLayout } from '@stores/site-layout';
</script>

<Modal isOpen title="User Settings">
	<div class="w-[20vw] flex items-center justify-center">
		<div class="m-5 w-full flex">
			<Toggle
				checked={$siteLayout.darkMode}
				onClick={() => ($siteLayout.darkMode = !$siteLayout.darkMode)}
			>
            Dark Mode
        </Toggle>
		</div>
	</div>
</Modal>
