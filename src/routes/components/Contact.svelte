<script lang="ts">
	import { Section, Contact } from 'flowbite-svelte-blocks';
	import { Label, Input, Textarea, Button } from 'flowbite-svelte';
</script>

<Section name="contact">
	<Contact>
		{#snippet h2()}Contact Me{/snippet}
		<p style="color: white;display:flex; justify-content: center; align-items: center;">
			Email: rehaananjaria@gmail.com
		</p>
	</Contact>
</Section>