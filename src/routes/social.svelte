<script lang="ts">
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
				>"<a href="mailto:vlad.krasovski@yahoo.com">vlad.krasovski@yahoo.com"</a></span
			><span class="text-black-lighter">,</span></span
		></Line
	>
    <Line lineNumber={6} />
	<Line lineNumber={2}
		><span class="text-purple-400 ml-16"
			>"github" : <span class="text-green-400"
				>"<a href="https://github.com/krasovsky22" target="_blank">https://github.com/krasovsky22</a
				>"</span
			><span class="text-black-lighter">,</span></span
		></Line
	>
    <Line lineNumber={6} />
	<Line lineNumber={2}
		><span class="text-purple-400 ml-16"
			>"discord" : <span class="text-green-400"
				>"<a href="hhttps://discord.com/users/3877" target="_blank">RandomPotato#3877</a
				>"</span
			><span class="text-black-lighter">,</span></span
		></Line
	>
    <Line lineNumber={6} />
	<Line lineNumber={2}
		><span class="text-purple-400 ml-16"
			>"linkedIn" : <span class="text-green-400"
				>"<a href="https://www.linkedin.com/in/vlad-krasovski-1ba85542" target="_blank"
					>vlad-krasovski-1ba85542</a
				>"</span
			><span class="text-black-lighter">,</span></span
		></Line
	>
	<Line lineNumber={1}><span class="text-orange-300 ml-8">{'}'}</span></Line>
	<Line lineNumber={1}><span class="text-yellow-200">{'}'}</span></Line>
</section>
