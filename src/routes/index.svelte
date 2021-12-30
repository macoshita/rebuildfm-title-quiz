<script lang="ts">
  import TitleScreen from '$lib/screens/title.svelte';
  import PlayScreen from '$lib/screens/play.svelte';
  import ResultScreen from '$lib/screens/result.svelte';
  import { scene } from '$lib/stores/questions';
</script>

{#if $scene === 'title'}
  <TitleScreen />
{:else if $scene === 'play'}
  <PlayScreen />
{:else if $scene === 'result'}
  <ResultScreen />
{/if}
