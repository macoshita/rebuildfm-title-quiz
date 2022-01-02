<script lang="ts">
  import { fly } from 'svelte/transition';
  import { PAPER_ANIMATION_DURATION } from '$lib/consts';

  let flying = false;
  let className = '';

  export { className as class };

  const duration = PAPER_ANIMATION_DURATION;

  function introstart() {
    setTimeout(() => {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }, duration);
  }

  function outrostart() {
    flying = true;
  }
</script>

<div
  class="flex justify-center"
  class:flying
  in:fly={{ y: -32, duration, delay: duration }}
  out:fly={{ y: -32, duration }}
  on:introstart={introstart}
  on:outrostart={outrostart}
>
  <div
    class="drop-shadow-md w-full max-w-screen-md mx-8 my-16 p-4 md:p-8 text-slate-600 bg-slate-50 border border-slate-200 {className}"
  >
    <slot />
  </div>
</div>

<style>
  .flying {
    z-index: 100;
  }
</style>
