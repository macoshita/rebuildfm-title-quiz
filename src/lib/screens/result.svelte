<script lang="ts">
  import Button from '$lib/components/button.svelte';

  import Paper from '$lib/components/paper.svelte';
  import SingleResult from '$lib/components/single-result.svelte';
  import { questions } from '$lib/stores/questions';
  import type { Scene } from 'src/routes/index.svelte';

  export let scene: Scene;
</script>

<Paper>
  <h2>Result</h2>

  {#each $questions as question}
    <SingleResult {question} />
  {/each}
</Paper>
