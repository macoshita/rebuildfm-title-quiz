<script lang="ts">
  import { answers, initPlay, questions } from '$lib/stores/questions';
  import type { Scene } from 'src/routes/index.svelte';
  import QuizForm from '$lib/components/quiz-form.svelte';
  import SingleResult from '$lib/components/single-result.svelte';

  export let scene: Scene;

  const QUESTION_LENGTH = 5;

  let init: Promise<void> = initPlay(QUESTION_LENGTH);
  let step = 1;
  $: question = $questions[step - 1];
  $: answer = $answers[step - 1];

  async function submit(event: CustomEvent<string[]>) {
    answer.inputs = event.detail;
  }

  function next() {
    if (step === $questions.length) {
      scene = 'result';
    } else {
      step++;
    }
  }
</script>

{#await init}
  loading...
{:then}
  {#key `step-${step}`}
    {#if answer.inputs}
      <SingleResult {question} {answer} />

      <button type="button" on:click={next}>Next</button>
    {:else}
      <QuizForm {question} on:submit={submit} />
    {/if}
  {/key}

  <p>{step} / {$questions.length}</p>
{/await}
