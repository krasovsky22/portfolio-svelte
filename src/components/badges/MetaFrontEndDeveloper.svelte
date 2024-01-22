<script lang="ts">
	import HoverableCard from '@/components/layout/HoverableCard.svelte';

	const URL =
		'https://coursera.org/share/0ccf462fc2892851ab48d92c42283b06';

	const handleOnClick = () => {
		window.open(URL, '_blank');
	};
</script>

<HoverableCard imageUrl="/badges/meta-front-end-developer.png" onClickEvent={handleOnClick} />
