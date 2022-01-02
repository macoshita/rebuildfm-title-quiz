<script lang="ts">
  import Button from '$lib/components/button.svelte';
  import Paper from '$lib/components/paper.svelte';
  import QuizForm from '$lib/components/quiz-form.svelte';
  import ScoreBox from '$lib/components/score-box.svelte';
  import TweetButton from '$lib/components/tweet-button.svelte';
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

<Paper>
  <h1 class="text-3xl mb-8 underline decoration-dotted decoration-1 font-bold">Result</h1>

  <ScoreBox class="mb-8 mx-auto" {score} />

  {#each $questions as question, i}
    <QuizForm class="mb-8" {question} results={allResults[i]} />
  {/each}

  <TweetButton
    class="mx-auto mb-4"
    text="#Rebuildfmタイトルクイズ で {score} 点でした"
    url={location.href}
  />

  <Button class="block mx-auto" on:click={next}>もう一度</Button>
</Paper>
