<script lang="ts">
	import HoverableCard from '@/components/layout/HoverableCard.svelte';

	const URL =
		'https://www.credly.com/org/facebook-blueprint/badge/meta-front-end-developer-certificate';

	const handleOnClick = () => {
		window.open(URL, '_blank');
	};
</script>

<HoverableCard imageUrl="/meta-front-end-developer.png" onClickEvent={handleOnClick}>
	In Progress
</HoverableCard>

<style>
	.text-fit {
		font-size: 0.7%;
	}
</style>
