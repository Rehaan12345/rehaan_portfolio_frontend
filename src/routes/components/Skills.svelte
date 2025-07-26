<script lang="ts">
	import { Section, HeroHeader, FeatureDefault, FeatureItem } from 'flowbite-svelte-blocks';
	import { ChartPieSolid, LandmarkSolid, BriefcaseSolid, DollarOutline, RocketSolid, CogOutline } from 'flowbite-svelte-icons';
</script>

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
		<FeatureItem>
			{#snippet h3()}Marketing{/snippet}
			{#snippet paragraph()}Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.{/snippet}
		</FeatureItem>
		<FeatureItem>
			{#snippet h3()}Legal{/snippet}
			{#snippet paragraph()}Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.{/snippet}
		</FeatureItem>
		<FeatureItem>
			{#snippet h3()}Business Automation{/snippet}
			{#snippet paragraph()}Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.{/snippet}
		</FeatureItem>
		<FeatureItem>
			{#snippet h3()}Finance{/snippet}
			{#snippet paragraph()}Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.{/snippet}
		</FeatureItem>
		<FeatureItem>
			{#snippet h3()}Enterprise Design{/snippet}
			{#snippet paragraph()}Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.{/snippet}
		</FeatureItem>
		<FeatureItem>
			{#snippet h3()}Operations{/snippet}
			{#snippet paragraph()}Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.{/snippet}
		</FeatureItem>
	</FeatureDefault>
</Section>