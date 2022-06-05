<script>
    import { url } from '@roxi/routify'
    import {darkmode} from '../pages/store/Store';
</script>

<style>
  .huge {
    font-size: 12rem;
  }
  .e404 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    height: 100vh;
    color: var(--color-dark);
  }
  .e404-dark{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: var(--color-dark);
    color: var(--color-light);
    width: 100%;
    height: 100vh;
  }
  a{
    text-decoration: none;
    background-color: var(--color-primary);
    color: var(--color-light);
    padding: 5px 10px;
    border-radius: 5px;
  }
</style>

<div class={$darkmode?'e404-dark':'e404'}>
  <div class="huge">404</div>
  <div class="big">The Route not found please click there. 
  <!-- link to the parent folder of _fallback.svelte -->
  <a href={$url('../')}>Go back</a>
  </div>
</div>
