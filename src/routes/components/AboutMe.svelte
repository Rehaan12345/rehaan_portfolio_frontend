<script lang="js">
	import { Section, Quotes, Testimonial } from 'flowbite-svelte-blocks';
</script>

<Section name="testimonial" sectionClass="bg-white bg-gray-900">
	<Testimonial Icon={Quotes}>
		<blockquote>
			<p class="text-2xl font-medium text-gray-900 dark:text-white">
				Hello! My name is Rehaan Anjaria, a self-taught programmer from Cambridge, Massachusetts. I love to create projects that serve a broad purpose, whether that’s bringing school and city resources closer to the high school students who deserve them, making mental health resources more accessible for city residents, or organizing and scraping data to help local business. Check out examples of my work below!
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