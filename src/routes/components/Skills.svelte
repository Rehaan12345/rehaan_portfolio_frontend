<script lang="js">
	import {onMount} from "svelte";
	import { Section, HeroHeader, FeatureDefault, FeatureItem } from 'flowbite-svelte-blocks';
	import { ChartPieSolid, LandmarkSolid, BriefcaseSolid, DollarOutline, RocketSolid, CogOutline } from 'flowbite-svelte-icons';
	import { getDocuments } from "$lib/model";
	import { writable } from "svelte/store";

	let ready = writable(false);

	let skills = [];

	onMount(async () => {
		ready.set(false);
		skills = await getDocuments("Skills");
		ready.set(true);
	})
</script>

{#if $ready}

	<Section name="feature" sectionClass="bg-white bg-gray-900">
		<HeroHeader
			class="mb-8 max-w-screen-md lg:mb-16"
			h2Class="mb-4 lg:mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-left"
			pClass="text-gray-500 sm:text-xl dark:text-gray-400 text-left sm:px-0 xl:px-0"
		>
			{#snippet h2()}Skills{/snippet}
			<!-- {#snippet paragraph()}Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.{/snippet} -->
		</HeroHeader>
		<FeatureDefault>
			{#each skills as s}
				<FeatureItem>
					{#snippet h3()}{s.title}{/snippet}
					{#snippet paragraph()}{s.info}{/snippet}
				</FeatureItem>
			{/each}
		</FeatureDefault>
	</Section>

{/if}