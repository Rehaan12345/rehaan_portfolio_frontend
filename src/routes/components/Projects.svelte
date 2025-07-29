<script>
	import { onMount } from "svelte";
	import { Section, ArticleAuthor, ArticleBody, ArticleHead, ArticleWrapper, BlogHead, BlogBodyWrapper } from 'flowbite-svelte-blocks';
	import { VideoCameraSolid, ArrowRightOutline, NewspaperSolid } from 'flowbite-svelte-icons';
	import { writable } from "svelte/store";
	import { getDocuments } from "$lib/model";

	let ready = writable(false);
	let projects = [];

	onMount(async() => {
		ready.set(false);
		projects = await getDocuments("Projects");
		ready.set(true);
	})
</script>

{#if $ready}

	<Section name="blog" sectionClass="bg-white bg-gray-900">
		<BlogHead>
			{#snippet h2()}My Projects{/snippet}
			<p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
		</BlogHead>
		<BlogBodyWrapper>
			{#each projects as p}

				<ArticleWrapper>
					<ArticleBody>
						{#snippet h2()}<a href={p.website} target="_blank">{p.title}</a>{/snippet}
						{#snippet paragraph()}
							<p class="mb-5 font-light text-gray-500 dark:text-gray-400">{p.about}</p>
						{/snippet}
					</ArticleBody>
					<ArticleAuthor>
						{#snippet author()}
							<img class="h-7 w-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
							<span class="font-medium dark:text-white">{p.title}</span>
						{/snippet}
						<a href={p["github-link-frontend"]} class="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium hover:underline">
							View Frontend
							<ArrowRightOutline size="sm" class="ml-2" />
						</a>
						<a href={p["github-link-backend"]} class="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium hover:underline">
							View Backend
							<ArrowRightOutline size="sm" class="ml-2" />
						</a>
					</ArticleAuthor>
				</ArticleWrapper>

			{/each}
		</BlogBodyWrapper>
	</Section>

{/if}