<script>
	import { onMount } from "svelte";
	import { Section, ArticleAuthor, ArticleBody, ArticleHead, ArticleWrapper, BlogHead, BlogBodyWrapper } from 'flowbite-svelte-blocks';
	import { Button, Popover, Modal } from "flowbite-svelte";
	import { VideoCameraSolid, ArrowRightOutline, NewspaperSolid, ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
	import { writable } from "svelte/store";
	import { getDocuments } from "$lib/model";

	let ready = writable(false);
	let showBigImg = writable(false);

	let projects = [];

	let currHover;

	let bigImgUrl;

	onMount(async() => {
		ready.set(false);
		projects = await getDocuments("Projects");
		currHover = projects[0];
		ready.set(true);
	})
</script>

<style>
	.img-wrapper {
		display: flex;
		flex-direction: row;
		min-width: 20rem;
		min-height: 20rem;
		max-width: 40rem;
		max-width: 40rem;
		gap: 2rem;
	}

	.title:hover {
		border-bottom: 2px solid white;
	}

	.title-text {
		color: white;
		font-size: xx-large;
	}

	.hover-text {
		color: white;
		padding-bottom: 2rem;
	}
</style>

{#if $ready}

	<Modal class="min-w-full" open={$showBigImg} on:close={() => {showBigImg.set(false); }} size="xl">
		<button type="button" on:click={() => {showBigImg.set(false);}} style="padding:0; border:none; background:none;">
			<img style="border-radius:5px" src={bigImgUrl} alt="">
		</button>
	</Modal>

	<Popover triggeredBy="#about" title={currHover.title}>

		<div class="img-wrapper">
			{#each currHover.images as i}
				<img style="cursor:pointer;" on:click={() => {bigImgUrl = i; showBigImg.set(true);}} alt="" src={i}>
			{/each}
		</div>
		
	</Popover>

	<Section name="blog" sectionClass="bg-white bg-gray-900">
		<!-- <BlogHead>
			{#snippet h2()}My Projects{/snippet}
		</BlogHead> -->
		<h2 class="title-text">My Projects</h2>
		<p class="hover-text"><i>Hover over each project name to view pictures!</i></p>
		<BlogBodyWrapper>
			{#each projects as p}
					<ArticleWrapper>
						<ArticleBody>
							{#snippet h2()}<a on:mouseover={() => {currHover = p}} on:focus={() => {currHover = p}} class="title" id="about" href={p.website} target="_blank">{p.title}</a><ArrowUpRightFromSquareOutline class="shrink-0 h-6 w-6" />{/snippet}
							{#snippet paragraph()}
								<p id="about" class="mb-5 font-light text-gray-500 dark:text-gray-400">{p.about}</p>
							{/snippet}
						</ArticleBody>
						<ArticleAuthor>
							{#snippet author()}
								<img class="h-7 w-7 rounded-full" src={p.images[0]} alt="Jese Leos avatar" />
								<span class="font-medium dark:text-white">{p.title}</span>
							{/snippet}
							<a style="color:white;" href={p["github-link-frontend"]} class="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium hover:underline">
								<i>View Frontend</i>
								<ArrowRightOutline size="sm" class="ml-2" />
							</a>
							<a style="color:white;" href={p["github-link-backend"]} class="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium hover:underline">
								<i>View Backend</i>
								<ArrowRightOutline size="sm" class="ml-2" />
							</a>
						</ArticleAuthor>
					</ArticleWrapper>
				{/each}
		</BlogBodyWrapper>
	</Section>


{/if}