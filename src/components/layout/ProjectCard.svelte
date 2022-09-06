<script lang="ts">
    import { fade } from 'svelte/transition';
	import { Hoverable } from '@components/shared';
    import { openModal } from 'svelte-modals';
	import VideoModal from '@components/VideoModal.svelte';

    function handleClick() {
		openModal(VideoModal, { videoId: 'kIwzF7gNxjE' });
	}

    export let imageUrl: string;
</script>

<Hoverable let:hovering={hovered}>
	<div class={`opacity-${hovered ? 100 : 40} cursor-pointer flex flex-col relative overflow-hidden h-full`} on:click={handleClick}>
		<img
			src={imageUrl}
			alt="text-project"
            class:zoom={hovered}
            class="h-full"
		/>
        {#if hovered}
            <div class="absolute w-full h-full inset-0 flex flex-col justify-center items-center" transition:fade>
                <img src="/show-work-circle.png" alt="view project" width="30%"/>
            </div>
        {/if}
	</div>
</Hoverable>

<style>
	.zoom {
		transform: scale(1.2);
        transition-duration: 500ms;
	}
</style>
