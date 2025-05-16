<script lang="ts">
    import { info } from '@stores/info';
	import Line from '@components/Line.svelte';
</script>

<section class="px-3">
	<Line lineNumber={1}><span class="text-yellow-200">{'{'}</span></Line>
	<Line lineNumber={2}
		><span class="text-purple-400 ml-8">"socials" : <span class="text-orange-300">{'{'}</span></span
		></Line
	>
	<Line lineNumber={2}
		><span class="text-purple-400 ml-16"
			>"email" : <span class="text-green-400"
				>"<a href={`mailto:${$info.email.url}`}>vlad.krasovski@yahoo.com"</a></span
			><span class="text-black-lighter">,</span></span
		></Line
	>
    <Line lineNumber={6} />
	<Line lineNumber={2}
		><span class="text-purple-400 ml-16"
			>"github" : <span class="text-green-400"
				>"<a href={$info.github.url} target="_blank">{$info.github.name}</a
				>"</span
			><span class="text-black-lighter">,</span></span
		></Line
	>
    <Line lineNumber={6} />
	<Line lineNumber={2}
		><span class="text-purple-400 ml-16"
			>"discord" : <span class="text-green-400"
				>"<a href={$info.discord.url} target="_blank">{$info.discord.name}</a
				>"</span
			><span class="text-black-lighter">,</span></span
		></Line
	>
    <Line lineNumber={6} />
	<Line lineNumber={2}
		><span class="text-purple-400 ml-16"
			>"linkedIn" : <span class="text-green-400"
				>"<a href={$info.linkedIn.url} target="_blank"
					>{$info.linkedIn.name}</a
				>"</span
			><span class="text-black-lighter">,</span></span
		></Line
	>
	<Line lineNumber={1}><span class="text-orange-300 ml-8">{'}'}</span></Line>
	<Line lineNumber={1}><span class="text-yellow-200">{'}'}</span></Line>
</section>
