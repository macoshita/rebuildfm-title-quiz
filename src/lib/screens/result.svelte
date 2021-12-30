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
  <h1 class="text-xl mb-10 underline decoration-dotted decoration-1 font-bold">Result</h1>

  {#each $questions as question, i}
    <div class="mb-8" in:fade={{ delay: 1000 * (i + 1) }}>
      <QuizForm {question} results={allResults[i]} />
    </div>
  {/each}

  <div class="flex flex-col items-center gap-4" in:fade={{ delay: 1000 * ($questions.length + 1) }}>
    <ScoreBox {score} />

    <TweetButton
      text="Rebuildfm タイトル当てクイズで {score} 点でした"
      url={location.href}
      hashtags="Rebuildfmタイトル当てクイズ"
    />

    <Button on:click={next}>もう一度</Button>
  </div>
</Paper>
