<script lang="ts">
  import { initPlay, questions, scene } from '$lib/stores/questions';
  import QuizForm from '$lib/components/quiz-form.svelte';
  import Paper from '$lib/components/paper.svelte';
  import Button from '$lib/components/button.svelte';

  const QUESTION_LENGTH = 5;

  let init: Promise<void> = initPlay(QUESTION_LENGTH);

  function submit() {
    scene.set('result');
  }
</script>

{#await init then}
  <Paper>
    <h1 class="text-xl mb-10 underline decoration-dotted decoration-1 font-bold">
      以下の各エピソードの概要を読み、空欄に当てはまる英単語を記入せよ。
    </h1>

    {#each $questions as question}
      <div class="mb-10">
        <QuizForm {question} />
      </div>
    {/each}

    <div class="text-center">
      <Button on:click={submit}>回答する</Button>
    </div>
  </Paper>
{/await}
