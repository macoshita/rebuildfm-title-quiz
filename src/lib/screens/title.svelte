<script lang="ts">
  import type { Scene } from 'src/routes/index.svelte';

  export let scene: Scene;

  function start() {
    scene = 'play';
  }
</script>

<h1>Rebuild.fm title quiz</h1>
<button on:click={start}>Start</button>
