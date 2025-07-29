<script lang="js">
// @ts-nocheck

	import { onMount } from 'svelte';
	import { Section, Quotes, Testimonial } from 'flowbite-svelte-blocks';
	import { getDocuments } from '$lib/model';
	import { writable } from 'svelte/store';

	let ready = writable(false);
	
	let info;

	onMount(async () => {
		ready.set(false);
		info = await getDocuments("about");
		info = info[0].info
		ready.set(true);
	})

</script>

{#if $ready}

	<Section name="testimonial" sectionClass="bg-white bg-gray-900">
		<Testimonial Icon={Quotes}>
			<blockquote>
				<p class="text-2xl font-medium text-gray-900 dark:text-white">
					{info}
				</p>
			</blockquote>
			{#snippet footer()}
				<img class="h-6 w-6 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/droneworks-14880.appspot.com/o/goodpfp.png?alt=media&token=d203dde8-d9ac-4101-a96f-0bacad845d0f" alt="michael profile" />
				<div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
					<div class="pr-3 font-medium text-gray-900 dark:text-white">Rehaan Anjaria</div>
				</div>
			{/snippet}
		</Testimonial>
	</Section>

{/if}