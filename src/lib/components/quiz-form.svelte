<script lang="ts">
  import type { Question } from '$lib/stores';
  import QuizFormInput from './quiz-form-input.svelte';

  export let question: Question;
  export let results: boolean[] | undefined = undefined;

  $: answered = typeof results !== 'undefined';
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
          <div>
            <QuizFormInput
              result={answered ? results[i - 1] : undefined}
              placeholder={`(${i})`}
              bind:value={question.inputs[i - 1]}
            />
            {#if answered}
              <div class="text-green-700 text-center">
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
