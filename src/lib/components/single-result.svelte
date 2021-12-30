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
    <div class="flex items-baseline flex-wrap	gap-x-1">
      {#each question.separatedTitle as s, i}
        {#if i > 0}
          <div class="text-center">
            <input
              class="bg-transparent border-b-2 w-24 px-2 {question.results[i - 1]
                ? 'text-green-700 border-green-700'
                : 'text-red-700 border-red-700'}"
              type="text"
              name="input[]"
              placeholder={`(${i})`}
              value={question.inputs[i - 1]}
              readonly
            />
            {#if !question.results[i - 1]}
              <div class="text-green-700">
                {question.corrects[i - 1]}
              </div>
            {/if}
          </div>
        {/if}
        {s}
      {/each}
    </div>
  </div>
</section>
