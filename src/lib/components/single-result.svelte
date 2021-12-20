<script lang="ts">
  import type { Question } from '$lib/utils/questions';

  export let question: Question;
  export let sentences: string[];
  export let answers: string[];

  $: corrects = question.answers.map(
    (s, i) => s.toLowerCase() === answers[i]?.trim().toLowerCase()
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
  {#each sentences as sentence, i}
    {#if i > 0}
      {#if !corrects[i - 1]}
        <span class="wrong">{answers[i - 1]}</span>
      {/if}
      <span class="correct">{question.answers[i - 1]}</span>
    {/if}
    {sentence}
  {/each}
</p>

<style>
  .correct {
    color: green;
  }
  .wrong {
    color: red;
    text-decoration: line-through;
  }
</style>
