<script lang="ts">
  import { fly } from 'svelte/transition';

  let flying = false;

  const OUTRO_DURATION = 750;

  function introstart() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, OUTRO_DURATION);
  }

  function outrostart() {
    flying = true;
  }
</script>

<div
  class="w-screen flex justify-center"
  class:flying
  in:fly={{ y: 32, duration: 1000, delay: OUTRO_DURATION }}
  out:fly={{ y: -32, duration: OUTRO_DURATION }}
  on:introstart={introstart}
  on:outrostart={outrostart}
>
  <div
    class="w-full max-w-screen-md mx-8 my-16 p-4 md:p-8 text-slate-600 bg-slate-50 border border-slate-200 aspect-a4"
  >
    <slot />
  </div>
</div>

<style>
  .flying {
    z-index: 100;
  }
</style>
