<script lang="ts">
	import HoverableCard from '@/components/layout/HoverableCard.svelte';

	const URL = 'https://www.credly.com/org/facebook-blueprint/badge/meta-front-end-developer-certificate';

	const handleOnClick = () => {
		window.open(URL, '_blank');
	};
</script>

<HoverableCard imageUrl="/meta-front-end-developer.png" onClickEvent={handleOnClick}>
	<p class="text-fit">In Progress</p>
</HoverableCard>


<style>
	.text-fit {
        font-size: 0.7%;
	}
</style>
