<script lang="ts">
  let className = '';
  export { className as class };
</script>

<button
  class="bg-slate-600 text-slate-50 hover:bg-slate-600/50 active:bg-slate-600/50 text-xl px-8 py-2 ease-in-out duration-300 cursor-pointer {className}"
  on:click
>
  <slot />
</button>
