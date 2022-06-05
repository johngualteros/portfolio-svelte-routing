<script>
	import { BarLoader } from 'svelte-loading-spinners';
    import {darkmode} from '../store/Store';
</script>
<div class={$darkmode?'loader-dark':'loader'}>
    
    <h1>John Gualteros 🦄</h1>
    <BarLoader size="330" color="#1f8bff" unit="px" duration="6s"/>
    
</div>
<style>
    .loader{
        background-color: var(--color-light);
        display: grid;
        place-content: center;
        place-items: center;
        margin: auto;
        width: 100%;
        height: 100vh;
    }
    .loader-dark{
        background-color: var(--color-dark);
        display: grid;
        place-content: center;
        place-items: center;
        width: 100%;
        height: 100vh;
    }
</style>