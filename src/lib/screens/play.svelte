<script lang="ts" context="module">
  export interface ParsedQuestion extends Question {
    sentences: string[];
  }
</script>

<script lang="ts">
  import type { Question } from '$lib/utils/questions';
  import type { Scene } from 'src/routes/index.svelte';
  import { onMount } from 'svelte';
  import { sampleSize } from 'lodash-es';
  import QuizForm from '$lib/components/quiz-form.svelte';
  export let scene: Scene;
  let questions: Question[];
  let question: Question;
  let sentences: string[];
  let step = 1;
  let answered = false;
  let answers: string[] = [];
  let corrects: boolean[] = [];
  let isCorrect: boolean;

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
      questions = sampleSize(await res.json(), 5);
      resolve();
    });
  });

  async function submit(event: CustomEvent<string[]>) {
    const q = await question;
    answers = event.detail;
    corrects = q.answers.map((s, i) => s.toLowerCase() === answers[i]?.trim().toLowerCase());

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

{#await init}
  loading...
{:then}
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
      <QuizForm {question} on:submit={submit} />
    {/if}
  {/key}

  <p>{step} / {questions.length}</p>
{/await}

<style>
  .correct {
    color: green;
  }
  .wrong {
    color: red;
    text-decoration: line-through;
  }
</style>
