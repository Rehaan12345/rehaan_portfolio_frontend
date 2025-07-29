<script lang="js">
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
				src: curr.link,
				alt: curr.title,
				name: curr.title,
				jobTitle: "",
				description: curr.about
			}
			otherProjects.push(temp);
		}
		ready.set(true);
	});

	// let members = [
	// 	{
	// 		href: '/',
	// 		src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
	// 		alt: 'Bonnie Green',
	// 		name: 'Bonnie Green',
	// 		jobTitle: 'CEO & Web Developer',
	// 		description: 'Bonnie drives the technical strategy of the flowbite platform and brand.'
	// 	},
	// 	{
	// 		href: '/',
	// 		src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
	// 		alt: 'Jese Leos',
	// 		name: 'Jese Leos',
	// 		jobTitle: 'CTO',
	// 		description: 'Jese drives the technical strategy of the flowbite platform and brand.'
	// 	},
	// 	{
	// 		href: '/',
	// 		src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
	// 		alt: 'Michael Gouch',
	// 		name: 'Michael Gouch',
	// 		jobTitle: 'Senior Front-end Developer',
	// 		description: 'Michael drives the technical strategy of the flowbite platform and brand'
	// 	},
	// 	{
	// 		href: '/',
	// 		src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
	// 		alt: 'Lana Byrd',
	// 		name: 'Lana Byrd',
	// 		jobTitle: 'Marketing & Sale',
	// 		description: 'Lana drives the technical strategy of the flowbite platform and brand.'
	// 	}
	// ];
</script>

{#if $ready}

	<Section name="team" sectionClass="bg-white bg-gray-900">
		<TeamWrapper>
			<TeamHeader>
				{#snippet label()}Other Projects{/snippet}
				<p class="font-light text-gray-500 sm:text-xl lg:mb-16 dark:text-gray-400">
					Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind
				</p>
			</TeamHeader>
			<TeamBody>
				{#each otherProjects as { href, src, alt, name, jobTitle, description }}
					<TeamItem {href} {src} {alt} {name} {jobTitle}>
						<p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
							{description}
						</p>
					</TeamItem>
				{/each}
			</TeamBody>
		</TeamWrapper>
	</Section>

{/if}