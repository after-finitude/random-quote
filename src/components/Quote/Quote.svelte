<script lang="ts">
  import { quotes } from "../../../data.json";

  import type { Quote } from "./types";

  let quote: Quote = {
    id: "",
    author: "",
    text: "",
  };

  const viewRandomQuote = () => {
    quote = quotes[Math.floor(Math.random() * quotes.length)];
  };
</script>

<style lang="scss">
  .container {
    &__quote {
      margin-bottom: 50px;
    }
  }
</style>

<div class="container">
  {#if quote.text && quote.author}
    <blockquote class="container__quote">
      <i>{quote.text}</i>
      <br />
      <br />
      <i>© {quote.author}</i>
    </blockquote>
  {:else}
    <blockquote class="container__quote">
      <i>Нажмите кнопку для отображения случайной цитаты</i>
    </blockquote>
  {/if}

  <button class="container__button" on:click={viewRandomQuote}>Случайная цитата</button>
</div>
