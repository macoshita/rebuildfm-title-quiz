<script lang="ts">
  import { initPlay, questions, step } from '$lib/stores/questions';
  import type { Scene } from 'src/routes/index.svelte';
  import QuizForm from '$lib/components/quiz-form.svelte';
  import SingleResult from '$lib/components/single-result.svelte';

  const QUESTION_LENGTH = 5;

  export let scene: Scene;

  let answers: string[] | undefined;

  let init: Promise<void> = initPlay(QUESTION_LENGTH);

  async function submit(event: CustomEvent<string[]>) {
    answers = event.detail;
  }

  function next() {
    answers = undefined;
    if ($step === $questions.length) {
      scene = 'result';
    } else {
      step.update((s) => s + 1);
    }
  }
</script>

{#await init}
  loading...
{:then}
  {#key `step-${$step}`}
    {#if answers}
      <SingleResult {answers} />

      <button type="button" on:click={next}>Next</button>
    {:else}
      <QuizForm on:submit={submit} />
    {/if}
  {/key}

  <p>{$step} / {$questions.length}</p>
{/await}
