<script lang="ts">
  import { tweened } from 'svelte/motion';
  import { quartOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import { PAPER_ANIMATION_DURATION } from '$lib/consts';

  let className = '';
  export { className as class };
  export let score = 0;
  export let animationDelay = PAPER_ANIMATION_DURATION * 2;

  const duration = 1000;

  const displayScore = tweened(0.1, {
    duration,
    delay: animationDelay,
    easing: quartOut
  });

  onMount(() => {
    displayScore.set(score);
  });

  $: judgeComment =
    score === 100 ? 'AWESOME' : score >= 80 ? 'GREAT' : score >= 40 ? 'GOOD' : 'KEEP TRYING';

  $: scoreColor =
    $displayScore >= 80
      ? 'text-green-700'
      : $displayScore >= 40
      ? 'text-amber-500'
      : 'text-red-700';
</script>

<div class="relative flex border-2 border-zinc-300 w-48 px-2 py-1 items-baseline {className}">
  {#if $displayScore === score}
    <div
      class="stamp absolute -top-5 -right-10 rotate-12 text-4xl tracking-tighter {scoreColor}"
      in:scale={{ start: 2, delay: 300 }}
    >
      {judgeComment}
    </div>
  {/if}
  <div
    class="flex-1 text-center text-6xl {scoreColor}"
    in:scale={{ start: 3, delay: animationDelay, duration }}
  >
    {Math.floor($displayScore)}
  </div>
  <span class="text-xl">/ 100</span>
</div>

<style>
  .stamp {
    font-family: 'Special Elite', cursive;
  }
</style>
