<script>
	import Projects from "./Projects.svelte";
    import TableInfo from "./TableInfo.svelte";
    import AboutMe from "./AboutMe.svelte";
    import Skills from "./Skills.svelte";
    import OtherProjects from "./OtherProjects.svelte";
    import Contact from "./Contact.svelte";
    import ShortBio from "./ShortBio.svelte";
    import { Section, Schedule, ScheduleItem } from 'flowbite-svelte-blocks';
    import { Button, Modal, GradientButton } from 'flowbite-svelte';
    import { writable } from "svelte/store";
    import { slide, fly } from "svelte/transition";

    let showResume = writable(false);
</script>

<style>
    /* .headerwrapper {
        padding: 1rem 2rem 2rem 1rem;
        display: flex;
        justify-content: space-evenly;
    }

    .rehaantext {
        padding: 3rem;
    }

    .profilepic {
        border-radius: 50%;
        border: 1px solid black;
        max-width: 30%;
    } */

    /* .aboutmewrapper {
        display: flex;
        align-items: center;
        justify-content: space;
    } */

    .resume-button {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 1rem;
    }
</style>

<Modal class="min-w-full" bind:open={$showResume} transition={slide} size="xl">

    <iframe title="Rehaan Anjaria Resume" src="https://drive.google.com/file/d/1ZlbH1PsSHRNxpD8lfHWwnNZrW-kQUo5E/view?usp=sharing" width="500" height="500" allowfullscreen></iframe>

</Modal>

<div class="aboutmewrapper">

    <Section name="schedule" sectionClass="bg-white bg-gray-900 antialiased">
        <ShortBio></ShortBio>

        <div class="resume-button">
            <button style="cursor:pointer; color:white; border:1px solid white; border-radius: 5px; padding: 1rem;" on:click={() => showResume.set(true)}>My resume</button>
        </div>

    </Section>

    <AboutMe></AboutMe>

</div>

<Skills></Skills>

<Projects></Projects>

<OtherProjects></OtherProjects>

<Contact></Contact>

<!-- 

<div class="mainwrapper">
    <div class="headerwrapper">
        <div class="rehaantext">
            <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Rehaan Anjaria
            </h1>
            <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
                - 18 years old
            </h3>
            <TableInfo></TableInfo>
        </div>
        <div class="profileimgwrapper">
            <img class="profilepic" src="https://firebasestorage.googleapis.com/v0/b/droneworks-14880.appspot.com/o/goodpfp.png?alt=media&token=d203dde8-d9ac-4101-a96f-0bacad845d0f" alt="Rehaan Anjaria"/>
        </div>
    </div>
    <Projects></Projects>

</div> -->