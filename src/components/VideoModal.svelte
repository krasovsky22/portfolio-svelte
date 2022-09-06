<script lang="ts">
	import YouTube from 'svelte-youtube';
	import Modal from './shared/Modal.svelte';

	export let videoId: string;

	const options = {
		height: 700,
		width: 1028
	};
</script>

<Modal isOpen>
	<YouTube {videoId} {options} />
</Modal>
