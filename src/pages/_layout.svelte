<script>
    let loading=setTimeout(() => {
        loading=false;
    }, 4000);
    import Sidebar from './components/Sidebar.svelte';
    import Header from './components/Header.svelte';
    import Loader from './components/Loading.svelte';
</script>
{#if loading}
    <Loader/>
    {:else}
    <Header/>
    <Sidebar/>
    <slot/>
{/if}

