<script>
    import Switch from '../components/Switch.svelte';
</script>
<header>
    <Switch />
</header>
<style>
    header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        padding-right: 20px;
        background-color: transparent;
        z-index: 2;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
</style>