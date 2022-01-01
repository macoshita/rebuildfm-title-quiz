<script lang="ts">
  let className = '';
  export { className as class };
</script>

<button
  class="bg-slate-600 text-slate-50 text-xl px-8 py-2 hover:bg-slate-900 active:bg-slate-900 ease-in-out duration-300 {className}"
  on:click
>
  <slot />
</button>
