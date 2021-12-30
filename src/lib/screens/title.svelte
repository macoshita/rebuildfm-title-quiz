<script lang="ts">
  import Paper from '$lib/components/paper.svelte';
  import Button from '$lib/components/button.svelte';
  import { scene } from '$lib/stores';

  function start() {
    scene.set('play');
  }
</script>

<Paper>
  <div class="text-center">
    <h1 class="mb-10 font-bold antialiased text-3xl">
      Rebuild.fm <span class="whitespace-nowrap">Title Test</span>
    </h1>
    <Button on:click={start}>開始</Button>
  </div>
</Paper>
