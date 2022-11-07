<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Hoverable } from '@components/shared';
	import { openModal } from 'svelte-modals';
	import CertificateModal from '../modals/CertificateModal.svelte';

	function handleClick() {
		openModal(CertificateModal, { someProps: 'test' });
	}

	export let imageUrl: string;
	export let onClickEvent: () => void = handleClick;
</script>

<Hoverable let:hovering={hovered}>
	<div
		class={`opacity-${
			hovered ? 100 : 40
		} cursor-pointer flex flex-col relative overflow-hidden h-full p-2`}
		on:click={onClickEvent}
	>
		<img src={imageUrl} alt="text-project" class:zoom={hovered} class="h-full" />
		{#if hovered}
			<div
				class="absolute w-full h-full inset-0 flex flex-col justify-center items-center"
				transition:fade
			>
				<div
					class="test flex flex-col w-1/2 h-1/2  items-center justify-center p-1 rounded-full bg-primary-light text-black-light text-center"
				>
					<slot>
						<p>View</p>
					</slot>
				</div>
			</div>
		{/if}
	</div>
</Hoverable>

<style>
	.zoom {
		transform: scale(1.2);
		transition-duration: 500ms;
	}

    .test{
        max-height: 60%;
        max-width: 60%;
    }
</style>
