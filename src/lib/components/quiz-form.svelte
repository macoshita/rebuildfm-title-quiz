<script lang="ts">
  import type { Question } from '$lib/stores/questions';

  import { createEventDispatcher } from 'svelte';

  export let question: Question;
  let inputs: string[] = question.separatedTitle.map(() => '');

  const dispatch = createEventDispatcher<{ submit: string[] }>();

  function submit() {
    dispatch('submit', inputs);
  }
</script>

<form on:submit|preventDefault={submit}>
  <p>{question.subtitle}</p>

  <p>
    {#each question.separatedTitle as s, i}
      {#if i > 0}
        <input type="text" name="input[]" placeholder={`(${i})`} bind:value={inputs[i - 1]} />
      {/if}
      {s}
    {/each}
  </p>

  <button type="submit">Answer</button>
</form>
