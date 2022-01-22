<script lang="ts">
  import Paper from '$lib/components/paper.svelte';
  import Button from '$lib/components/button.svelte';
  import { scene } from '$lib/stores';
  import GithubLogo from '$lib/components/github-logo.svelte';

  function start() {
    scene.set('play');
  }
</script>

<Paper class="text-3xl md:text-5xl text-center py-12">
  <h1 class="font-bold leading-relaxed mb-8">
    Rebuild.fm<br />タイトルクイズ
  </h1>
  <Button on:click={start}>開始</Button>
  <div class="block mt-16 text-center">
    <a href="https://github.com/macoshita/rebuildfm-title-quiz">
      <GithubLogo class="w-8 inline" />
    </a>
  </div>
</Paper>
