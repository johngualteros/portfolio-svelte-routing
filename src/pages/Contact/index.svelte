<script>
    import {darkmode} from '../store/Store';
    import Loading from '../components/Loading.svelte';
	let loading=setTimeout(() => {
        loading=false;
    }, 2000);
</script>
{#if loading}
    <Loading/>
{:else}
<section class={$darkmode?'contact-dark':'contact'}>
    
    <div><p class="especialFont">&lt;div&gt;</p>
    <h1 class="tab">Contact Me</h1>
    <h4 class="tab">If you are interested in contact me click The button</h4>
    <div><p class="especialFont">&lt;button&gt;</p>
        <a href="mailto:gualterosjohn40@gmail.com"><button class="contact-btn tab">
            Contact Me
        </button></a>
        <p class="especialFont">&lt;/button&gt;</p></div>
    <p class="especialFont">&lt;/div&gt;</p></div>
</section>
{/if}
<style>
    .contact{
        width: 100%;
        height: 100vh;
        display: grid;
        place-items: center;
    }
    .contact-dark{
        width: 100%;
        height: 100vh;
        display: grid;
        place-items: center;
        background-color: var(--color-dark);
    }
    :global(.contact-dark h4){
        color: var(--color-light);
    }
    .contact-btn{
        width: 500px;
        font-size: 1.5rem;
        outline: none;
        border: 2px solid var(--color-primary);
        color: var(--color-primary);
        background-color: transparent;
        height: 50px;
        font-weight: bold;
        border-radius: 5px;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
    }
    .contact-btn:hover{
        background-color: var(--color-primary);
        color: var(--color-light);
        transition: all 0.5s ease-in-out;
    }
</style>