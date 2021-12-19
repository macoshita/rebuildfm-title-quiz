<script lang="ts">
  import type { Question } from '$lib/utils/questions';

  import { createEventDispatcher } from 'svelte';

  export let question: Question;
  let answers: string[] = [];
  let sentences = question.title.split('###');

  const dispatch = createEventDispatcher<{ submit: string[] }>();

  function submit() {
    dispatch('submit', answers);
  }
</script>

<form on:submit|preventDefault={submit}>
  <p>{question.subtitle}</p>

  <p>
    {#each sentences as sentence, i}
      {#if i > 0}
        <input type="text" name="answer[]" placeholder={`(${i})`} bind:value={answers[i - 1]} />
      {/if}
      {sentence}
    {/each}
  </p>

  <button type="submit">Answer</button>
</form>
