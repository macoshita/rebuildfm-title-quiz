<script lang="ts">
  import type { Question } from '$lib/stores/questions';

  export let question: Question;
</script>

<section>
  <h2 class="mb-4">
    <div class="text-sm">Ep.{question.episode}</div>
    <div class="font-bold">{question.subtitle}</div>
  </h2>

  <div class="flex items-baseline gap-x-1">
    <div>A.</div>
    <div>
      {#each question.separatedTitle as s, i}
        {#if i > 0}
          <input
            class="bg-transparent border-b-2 w-24 px-2"
            type="text"
            name="input[]"
            placeholder={`(${i})`}
            bind:value={question.inputs[i - 1]}
          />
        {/if}
        {s}
      {/each}
    </div>
  </div>
</section>
