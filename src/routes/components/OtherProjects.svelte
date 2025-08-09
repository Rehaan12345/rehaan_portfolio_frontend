<script lang="js">
	//@ts-nocheck
	import { onMount } from "svelte";
	import { Section, TeamWrapper, TeamHeader, TeamBody, TeamItem } from 'flowbite-svelte-blocks';
	import { writable } from "svelte/store";
	import { getDocuments } from "$lib/model";

	let ready = writable(false);
	let otherProjectsTemp = [];
	let otherProjects = [];

	onMount(async() => {
		ready.set(false);
		otherProjectsTemp = await getDocuments("OtherProjects");
		for (let i = 0; i < otherProjectsTemp.length; i++) {
			const curr = otherProjectsTemp[i];
			const temp = {
				href: curr.link,
				target: "_blank",
				src: curr.src,
				alt: curr.title,
				name: curr.title,
				jobTitle: "",
				description: curr.about
			}
			otherProjects.push(temp);
		}
		ready.set(true);
	});
</script>

<style>
	.title-text {
		color: white;
		font-size: xx-large;
	}
</style>

{#if $ready}

	<Section name="team">
		<h2 class="title-text">Other Projects</h2>
		<TeamWrapper>
			<TeamBody>
				{#each otherProjects as { href, src, alt, name, jobTitle, description }}
					<TeamItem {href} {src} {alt} {name} {jobTitle}>
						<p class="mt-3 mb-4 font-light text-gray-400">
							{description}
						</p>
					</TeamItem>
				{/each}
			</TeamBody>
		</TeamWrapper>
	</Section>

{/if}