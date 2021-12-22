<script lang="ts">
  import type { Answer, Question } from '$lib/stores/questions';

  export let question: Question;
  export let answer: Answer;

  $: corrects = question.corrects.map(
    (s, i) => s.toLowerCase() === answer.inputs[i]?.trim().toLowerCase()
  );
  $: correctAll = corrects.every(Boolean);
</script>

{#if correctAll}
  <p class="correct">Correct!</p>
{:else}
  <p class="wrong">Wrong...</p>
{/if}

<p>{question.subtitle}</p>

<p>
  {#each question.separatedTitle as s, i}
    {#if i > 0}
      {#if !corrects[i - 1]}
        <span class="wrong-word">{answer.inputs[i - 1]}</span>
      {/if}
      <span class="correct-word">{question.corrects[i - 1]}</span>
    {/if}
    {s}
  {/each}
</p>

<style>
  .correct-word {
    color: green;
  }
  .wrong-word {
    color: red;
    text-decoration: line-through;
  }
</style>
