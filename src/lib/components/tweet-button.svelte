<script lang="ts">
  import TwitterLogo from './twitter-logo.svelte';

  export let text: string;
  export let url: string;
  export let hashtags: string;

  $: query = new URLSearchParams([
    ['text', text],
    ['url', url],
    ['hashtags', hashtags]
  ]);
</script>

<a
  class="bg-twitter text-white text-xl px-8 py-2 flex items-center gap-1"
  href="https://twitter.com/intent/tweet?{query}"
  target="_blank"
  rel="noopener noreferrer"
>
  <div class="w-8">
    <TwitterLogo />
  </div>
  ツイートする
</a>
