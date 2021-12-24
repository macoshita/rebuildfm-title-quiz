<script lang="ts">
  import { fly } from 'svelte/transition';

  let flying = false;

  function outrostart() {
    flying = true;
  }
</script>

<div
  class="absolute w-screen flex justify-center"
  class:flying
  in:fly={{ y: 32, duration: 1000, delay: 500 }}
  out:fly={{ y: -32, duration: 1000 }}
  on:outrostart={outrostart}
>
  <div
    class="w-full max-w-screen-md mx-8 my-16 p-4 md:p-8 text-slate-600 bg-slate-50 border border-slate-200"
  >
    <slot />
  </div>
</div>

<style>
  .flying {
    z-index: 100;
  }
</style>
