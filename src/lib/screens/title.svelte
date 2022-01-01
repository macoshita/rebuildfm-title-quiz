<script lang="ts">
  import Paper from '$lib/components/paper.svelte';
  import Button from '$lib/components/button.svelte';
  import { scene } from '$lib/stores';

  function start() {
    scene.set('play');
  }
</script>

<Paper class="text-3xl md:text-5xl text-center">
  <h1 class="font-bold leading-relaxed my-8">
    Rebuild.fm<br />タイトルクイズ
  </h1>
  <Button on:click={start}>開始</Button>
</Paper>
