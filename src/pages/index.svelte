<script>
	import Home from './components/Home.svelte';
	import About from '../pages/About/index.svelte';
	import Projects from '../pages/Projects/index.svelte';
	import Contact from '../pages/Contact/index.svelte';
	import Footer from '../pages/components/Footer.svelte';
	import {darkmode} from './store/Store.js';
</script>

<main class={$darkmode?'darkmode':''}>
	<Home/>
	<About/>
	<Projects/>
	<Contact/>
	<Footer/>
</main>
<style>
	main{
		height:auto;
		background-color: var(--color-light);
		color: var(--color-dark);
		overflow: hidden;
	}
	/* Global Css */
	:global(body){
		font-family: 'Open Sans','sans-serif';
		overflow:overlay;
	}
	:global(h1){
		color: var(--color-primary);
		font-size:4.5em;
		font-weight:bold;
	}
	:global(.title){
		color: var(--color-primary);
		font-size:3.5em;
		font-weight:bold;
	}
	:global(.bold){
		font-weight: 800;
	}
	:global(.especialFont){
		color: var(--color-secondary);
		font-weight: bold;
		font-family: 'Caveat', cursive;
		font-size: 1.5em;
	}
	:global(.tab){
		margin-left: 5%;
	}
	:global(.tab-2){
		margin-left: 7%;
	}
	:global(h2){
		color: var(--color-dark);
		font-size: 3.5em;
		font-weight:bold;
	}
	:global(h3){
		color: var(--color-gray);
		font-size: 2em;
		font-weight:bold;
		font-family: 'Caveat', cursive;
	}
	:global(h4){
		color: var(--color-terciary);
		font-size: 1.4em;
		font-weight:bold;
		font-family: 'Open Sans','sans-serif';
	}
	/* Darkmode */
	:global(main.darkmode){
		background-color: var(--color-dark);
		color: var(--color-light);
	}
	:global(.darkmode h4){
		color: var(--color-light);
	}
	:global(.darkmode h2){
		color: var(--color-light);
	}
</style>