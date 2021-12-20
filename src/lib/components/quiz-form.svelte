<script lang="ts">
  import { currentQuestion } from '$lib/stores/questions';

  import { createEventDispatcher } from 'svelte';

  let answers: string[] = [];

  const dispatch = createEventDispatcher<{ submit: string[] }>();

  function submit() {
    dispatch('submit', answers);
  }
</script>

<form on:submit|preventDefault={submit}>
  <p>{$currentQuestion.subtitle}</p>

  <p>
    {#each $currentQuestion.separatedTitle as s, i}
      {#if i > 0}
        <input type="text" name="answer[]" placeholder={`(${i})`} bind:value={answers[i - 1]} />
      {/if}
      {s}
    {/each}
  </p>

  <button type="submit">Answer</button>
</form>
