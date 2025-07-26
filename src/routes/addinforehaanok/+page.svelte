<script lang="ts">
	import { Section } from 'flowbite-svelte-blocks';
	import { Label, Input, Button, Select, Textarea } from 'flowbite-svelte';
    import { writable } from "svelte/store";

    let showPage = writable(false);
    let cp = import.meta.env.VITE_RA;

    let currPass = "";

    const handlePassSubmit = () => {
        if (currPass == cp) showPage.set(true);
    }

	const handleSubmit = () => {
		alert('Form submited.');
	};
	let selected = $state();
	let countries = [
		{ value: 'tv', name: 'TV/Monitors' },
		{ value: 'pc', name: 'PC' },
		{ value: 'phone', name: 'Phones' }
	];
</script>

<style>
    .formwrapper {
        margin: 5rem;
    }
</style>

{#if $showPage}

    <div class="formwrapper">
        <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
        <form onsubmit={handleSubmit}>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div class="sm:col-span-2">
                    <Label for="name" class="mb-2">Product Name</Label>
                    <Input type="text" id="name" placeholder="Type product name" required />
                </div>
                <div class="w-full">
                    <Label for="brand" class="mb-2">Brand</Label>
                    <Input type="text" id="brand" placeholder="Product brand" required />
                </div>
                <div class="w-full">
                    <Label for="price" class="mb-2">Price</Label>
                    <Input type="text" id="price" placeholder="$29999" required />
                </div>
                <div class="w-full">
                    <Label
                        >Category
                        <Select class="mt-2" items={countries} bind:value={selected} required />
                    </Label>
                </div>
                <div class="w-full">
                    <Label for="weight" class="mb-2">Item Weight (kg)</Label>
                    <Input type="text" id="weight" placeholder="12" required />
                </div>
                <div class="sm:col-span-2">
                    <Label for="description" class="mb-2">Description</Label>
                    <Textarea id="description" placeholder="Your description here" rows={4} name="description" required />
                </div>
                <Button type="submit" class="w-32">Add product</Button>
            </div>
        </form>
    </div>
        
{:else}

    <form on:submit={handlePassSubmit}>
        <label for="enter-the-site-code">Password</label>
        <input style="border: 1px solid red;" type="password" name="enter-the-site-code" id="enter-the-site-code" bind:value={currPass}>
        <input style="border: 1px solid black; cursor:pointer; padding: .5rem;" type="submit">
    </form>

{/if}