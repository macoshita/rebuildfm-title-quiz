<script lang="ts">
  import type { Question } from '$lib/stores';
  import { scale } from 'svelte/transition';
  import QuizFormInput from './quiz-form-input.svelte';

  let className = '';
  export { className as class };
  export let question: Question;
  export let results: boolean[] = [];

  $: answered = results.length > 0;
  $: correct = results.every(Boolean);
</script>

<section class={className}>
  <h2 class="mb-4">
    <div class="text-sm">Ep.{question.episode}</div>
    <div class="font-bold">{question.subtitle}</div>
  </h2>

  <div class="relative flex items-baseline gap-x-1">
    {#if answered}
      <div class="absolute -top-2 left-0 {correct ? 'text-green-700' : 'text-red-700'}">
        <span class="material-icons md-24">
          {correct ? 'check' : 'close'}
        </span>
      </div>
    {/if}
    <div>A.</div>
    <div class="flex items-baseline flex-wrap	gap-x-1">
      {#each question.separatedTitle as s, i}
        {#if i > 0}
          <div>
            <QuizFormInput
              result={results[i - 1]}
              placeholder={`(${i})`}
              bind:value={question.inputs[i - 1]}
            />
            {#if answered && !results[i - 1]}
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
