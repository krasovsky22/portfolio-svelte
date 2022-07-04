<script>
	const files = [
		'README.md',
		'node_modules',
		'package.json',
		'postcss.config.cjs',
		'src',
		'static',
		'svelte-config.js',
		'tailwind.config.cjs',
		'tsconfig.json',
		'yarn.lock'
	];
</script>

<div class="flex flex-row justify-between w-full">
	{#each files as file}
		<p>{file}</p>
	{/each}
</div>
