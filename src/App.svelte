<script lang="ts">
  import Home from '~pages/Home.svelte';
  import Book from '~pages/Book.svelte';

  let isHomePage = true;

  const startSelectBook = () => {
    isHomePage = false;
  };
</script>

{#if isHomePage}
  <Home {startSelectBook} />
{:else}
  <Book />
{/if}
