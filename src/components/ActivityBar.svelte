<script>
    const activityBarItems = [
        {
            title: 'Explorer',
            icon: 'fa-solid fa-file'
        },
        {
            title: 'Search',
            icon: 'fa-solid fa-magnifying-glass'
        },
        {
            title: 'Source Control',
            icon: 'fa-solid fa-diagram-project'
        }
    ]

    const activityBarBottomItems = [
        {
            title: 'Accounts',
            icon: 'fa-regular fa-circle-user'
        },
        {
            title: 'Manage',
            icon: 'fa-solid fa-gear'
        },
    ]
</script>

<div class="w-12 flex flex-col h-full align-top">
	<ul class="w-full flex flex-col justify-start flex-grow">
        {#each activityBarItems as { title, icon }}
            <li class="mx-auto p-2 cursor-pointer hover:text-blue-500">
                <div class="flex items-center" {title}>
                    <i class={`${icon} fa-xl`} />
                </div>
            </li>
        {/each}
	</ul>

    <ul class="w-full flex flex-col justify-center self-end">
        {#each activityBarBottomItems as { title, icon }}
            <li class="mx-auto p-2 cursor-pointer hover:text-blue-500">
                <div class="flex items-center" {title}>
                    <i class={`${icon} fa-xl`} />
                </div>
            </li>
        {/each}
	</ul>
</div>
