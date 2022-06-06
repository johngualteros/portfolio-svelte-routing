<script>
    import {HouseFill,PersonFill,ArchiveFill,TelephoneForwardFill} from "svelte-bootstrap-icons";
    import {url} from '@roxi/routify';
</script>
<div class="container-sidebar">
    <div class="child">
        <a href={$url('./')} class="icon-box">
            <HouseFill width={40} height={40} fill="white"/>
        </a>
        <a href={$url('./About')} class="icon-box">
            <PersonFill width={40} height={40} fill="white"/>
        </a>
        <a href={$url('./Projects')} class="icon-box">
            <ArchiveFill width={40} height={40} fill="white"/>
        </a>
        <a href={$url('./Contact')} class="icon-box">
            <TelephoneForwardFill width={40} height={40} fill="white"/>
        </a>
    </div>
</div>
<style>
.container-sidebar {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100px;
  height: 80%;
  background-color: var(--color-primary);
  overflow-y: auto;
  z-index: 2;
  border-radius:10px;
}
.child{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
}
.icon-box{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 70px;
    cursor: pointer;
    transition: all .5s ease-in-out;
    border-radius: 10px;
}
.icon-box:hover{
    transition: all .5s ease-in-out;
    background-color: var(--color-dark);
}
@media(max-width: 1092px){
    .container-sidebar{
        width: 100%;
        height: 100px;
        position: fixed;
        top: 85%;
        buttom: 0;
        left: 0;
        right: 0;
        transform: translateX(0);
        background-color: var(--color-primary);
        overflow-y: auto;
        z-index: 2;
        border-radius:10px;
    }
    .child{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
    }
    .icon-box{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 70px;
        cursor: pointer;
        transition: all .5s ease-in-out;
        border-radius: 10px;
    }
    .icon-box:hover{
        transition: all .5s ease-in-out;
        background-color: var(--color-dark);
    }
}
@media(max-width:980px){
    .container-sidebar{
        top: 80%;
    }
}
</style>