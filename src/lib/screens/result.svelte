<script lang="ts">
  import Button from '$lib/components/button.svelte';
  import Paper from '$lib/components/paper.svelte';
  import QuizForm from '$lib/components/quiz-form.svelte';
  import ScoreBox from '$lib/components/score-box.svelte';
  import { questions, scene } from '$lib/stores';
  import { fade } from 'svelte/transition';

  $: allResults = $questions.map((q) =>
    q.corrects.map((s, i) => s.toLowerCase() === q.inputs[i].trim().toLowerCase())
  );

  const oneScore = 100 / $questions.length;

  $: score = allResults.reduce(
    (score, results) => score + (results.every(Boolean) ? oneScore : 0),
    0
  );

  function next() {
    scene.set('title');
  }
</script>

<svelte:head>
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<Paper>
  <h1 class="text-xl mb-10 underline decoration-dotted decoration-1 font-bold">Result</h1>

  {#each $questions as question, i}
    <div class="mb-8" in:fade={{ delay: 1000 * (i + 1) }}>
      <QuizForm {question} results={allResults[i]} />
    </div>
  {/each}

  <div class="flex flex-col items-center gap-4" in:fade={{ delay: 1000 * ($questions.length + 1) }}>
    <ScoreBox {score} />

    <a
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      class="twitter-share-button"
      data-size="large"
      data-show-count="false">Tweet</a
    >

    <Button on:click={next}>もう一度</Button>
  </div>
</Paper>
