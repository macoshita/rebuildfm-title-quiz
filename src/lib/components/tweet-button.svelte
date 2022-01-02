<script lang="ts">
  import Button from './button.svelte';
  import TwitterLogo from './twitter-logo.svelte';

  let className = '';
  export { className as class };
  export let text: string | undefined = undefined;
  export let url: string | undefined = undefined;
  export let hashtags: string | undefined = undefined;

  $: query = new URLSearchParams(
    [
      ['text', text],
      ['url', url],
      ['hashtags', hashtags]
    ].filter((x) => x[1] !== undefined)
  );

  function open() {
    window.open(`https://twitter.com/intent/tweet?${query}`, '_blank', 'noreferrer');
  }
</script>

<Button
  class="bg-twitter text-white hover:bg-twitter/50 active:bg-twitter/50 flex items-center gap-1 {className}"
  on:click={open}
>
  <TwitterLogo class="w-8 inline" />
  ツイートする
</Button>
