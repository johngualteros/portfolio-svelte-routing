<script>
    import {darkmode} from '../store/Store';
    const handleClick=()=>{
        darkmode.update(darkmode=>!darkmode);
    };
</script>
<div class="Switch">
    <div class={$darkmode?'switch-container on':'switch-container'}>
        <button class="circle" on:click={handleClick}>
            <i class={$darkmode?'bi bi-sun icon-sun':'bi bi-moon icon-moon'}></i>
        </button>
    </div>
</div>
<style>
    .switch-container{
        border-radius:30px;
        margin: 0 10px;
    }
    .circle{
        outline: none;
        border: none;
        cursor:pointer;
        width: 50px;
        height: 50px;
        border-radius:50%;
        transition: all 0.2s;
        background-color: transparent;
    }
    .icon-sun{
        font-size: 35px;
        color: var(--color-light);
    }
    .icon-moon{
        font-size: 35px;
        color: var(--color-dark);
    }
</style>