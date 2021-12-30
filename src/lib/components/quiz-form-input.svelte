<script lang="ts">
  export let value: string;
  export let placeholder: string;
  export let result: boolean | undefined;

  $: answered = typeof result !== 'undefined';

  $: color = answered
    ? result
      ? 'text-green-700 border-green-700'
      : 'text-red-700 border-red-700'
    : '';
</script>

<input
  class="bg-transparent border-b-2 w-24 px-2 {color}"
  type="text"
  name="input[]"
  {placeholder}
  bind:value
  readonly={answered}
/>
