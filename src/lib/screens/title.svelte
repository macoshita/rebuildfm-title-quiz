<script lang="ts">
  import type { Scene } from 'src/routes/index.svelte';
  import Paper from '$lib/components/paper.svelte';
  import Button from '$lib/components/button.svelte';

  export let scene: Scene;

  function start() {
    scene = 'play';
  }
</script>

<Paper>
  <div class="text-center">
    <h1 class="mb-10 font-bold antialiased text-3xl">
      Rebuild.fm <span class="whitespace-nowrap">Title Quiz</span>
    </h1>
    <Button on:click={start}>開始</Button>
  </div>
</Paper>
