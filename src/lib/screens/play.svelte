<script lang="ts">
  import type { Question } from '$lib/utils/questions';
  import type { Scene } from 'src/routes/index.svelte';
  import { onMount } from 'svelte';
  import QuizForm from '$lib/components/quiz-form.svelte';
  import SingleResult from '$lib/components/single-result.svelte';
  import { sample } from '$lib/utils/utils';
  export let scene: Scene;
  let questions: Question[];
  let question: Question;
  let sentences: string[];
  let step = 1;
  let answers: string[] | undefined;

  $: if (questions) {
    question = questions[step - 1];
    sentences = question.title.split('###');
  }

  let init: Promise<void> = new Promise((resolve) => {
    onMount(async () => {
      const res = await fetch('/api/questions.json');
      if (!res.ok) {
        throw new Error('Failed to fetch questions');
      }
      questions = sample(await res.json(), 5);
      resolve();
    });
  });

  async function submit(event: CustomEvent<string[]>) {
    answers = event.detail;
  }

  function next() {
    answers = undefined;
    step++;
  }
</script>

{#await init}
  loading...
{:then}
  {#key `step-${step}`}
    {#if answers}
      <SingleResult {question} {sentences} {answers} />

      <button type="button" on:click={next}>Next</button>
    {:else}
      <QuizForm {question} on:submit={submit} />
    {/if}
  {/key}

  <p>{step} / {questions.length}</p>
{/await}
