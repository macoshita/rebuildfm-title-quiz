<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import { sampleSize } from 'lodash-es';

  export const ssr = false;

  export const load: Load = async ({ fetch }) => {
    const res = await fetch('/api/questions.json');

    if (res.ok) {
      return {
        props: {
          questions: sampleSize(await res.json(), 5)
        }
      };
    }

    return {
      status: res.status,
      error: new Error('Failed to fetch questions')
    };
  };
</script>

<script lang="ts">
  import type { Question } from '$lib/questions';
  export let questions: Question[];
  let step = 1;
  let answered = false;
  let answers: string[] = [];
  let corrects: boolean[] = [];
  let isCorrect: boolean;

  $: question = questions[step - 1];
  $: sentences = question.title.split('###');

  function submit() {
    corrects = question.answers.map((s, i) => s.toLowerCase() === answers[i]?.trim().toLowerCase());

    isCorrect = corrects.every(Boolean);

    answered = true;
  }

  function next() {
    answers = [];
    answered = false;
    corrects = [];

    step++;
  }
</script>

{#key `step-${step}`}
  {#if answered}
    {#if isCorrect}
      <p class="correct">Correct!</p>
    {:else}
      <p class="wrong">Wrong...</p>
    {/if}

    <p>{question.subtitle}</p>

    <p>
      {#each sentences as sentence, i}
        {#if i === 0}
          {sentence}
        {:else}
          {#if !corrects[i - 1]}
            <span class="wrong">{answers[i - 1]}</span>
          {/if}
          <span class="correct">{question.answers[i - 1]}</span>
          {sentence}
        {/if}
      {/each}
    </p>

    <button type="button" on:click={next}>Next</button>
  {:else}
    <form on:submit|preventDefault={submit}>
      <p>{question.subtitle}</p>

      <p>
        {#each sentences as sentence, i}
          {#if i === 0}
            {sentence}
          {:else}
            <input type="text" name="answer[]" placeholder={`(${i})`} bind:value={answers[i - 1]} />
            {sentence}
          {/if}
        {/each}
      </p>

      <button type="submit">Answer</button>
    </form>
  {/if}
{/key}

<p>{step} / {questions.length}</p>

<style>
  .correct {
    color: green;
  }
  .wrong {
    color: red;
    text-decoration: line-through;
  }
</style>
