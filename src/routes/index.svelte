<script lang="ts" context="module">
  export type Scene = 'title' | 'play' | 'result';
</script>

<script lang="ts">
  import TitleScreen from '$lib/screens/title.svelte';
  import PlayScreen from '$lib/screens/play.svelte';
  import ResultScreen from '$lib/screens/result.svelte';

  let scene: Scene = 'title';
</script>

{#if scene === 'title'}
  <TitleScreen bind:scene />
{:else if scene === 'play'}
  <PlayScreen bind:scene />
{:else if scene === 'result'}
  <ResultScreen bind:scene />
{/if}
