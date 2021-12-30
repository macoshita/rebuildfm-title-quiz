<script lang="ts">
  export let score = 0;

  $: scoreColor = score >= 80 ? 'text-green-700' : score >= 40 ? 'text-amber-500' : 'text-red-700';
</script>

<div class="flex border-2 border-slate-300 w-32 px-2 py-1 items-baseline">
  <div class="flex-1 text-center text-4xl {scoreColor}">{score}</div>
  <span class="text-mb">/ 100</span>
</div>
