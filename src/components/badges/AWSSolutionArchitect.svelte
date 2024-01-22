<script lang="ts">
    import HoverableCard from '@/components/layout/HoverableCard.svelte';

    const URL = 'https://www.credly.com/badges/32ec4269-6de1-40cf-87e2-7a8983182b38/public_url';

    const handleOnClick = () => {
        window.open(URL, '_blank');
    }
</script>

<HoverableCard imageUrl="/badges/aws-certified-solutions-architect-associate.png" onClickEvent={handleOnClick} />
