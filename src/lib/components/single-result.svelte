<script lang="ts">
  import { currentQuestion } from '$lib/stores/questions';

  export let answers: string[];

  $: corrects = $currentQuestion.answers.map(
    (s, i) => s.toLowerCase() === answers[i]?.trim().toLowerCase()
  );
  $: correctAll = corrects.every(Boolean);
</script>

{#if correctAll}
  <p class="correct">Correct!</p>
{:else}
  <p class="wrong">Wrong...</p>
{/if}

<p>{$currentQuestion.subtitle}</p>

<p>
  {#each $currentQuestion.separatedTitle as s, i}
    {#if i > 0}
      {#if !corrects[i - 1]}
        <span class="wrong">{answers[i - 1]}</span>
      {/if}
      <span class="correct">{$currentQuestion.answers[i - 1]}</span>
    {/if}
    {s}
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
