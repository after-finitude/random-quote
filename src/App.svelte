<script lang="ts">
  import Home from '~pages/Home.svelte';
  import Book from '~pages/Book.svelte';

  import { checkMobile } from '~utils/checkMobile.ts';

  let isHomePage = true;
  const isMobile = checkMobile();

  const startSelectBook = () => {
    isHomePage = false;
  };
</script>

<div class="container">
  {#if isMobile}
    <p>Sorry, mobile devices are not yet supported.</p>
  {:else if isHomePage}
    <Home {startSelectBook} />
  {:else}
    <Book />
  {/if}
</div>

<style>
  * {
    font-family: -apple-system, system-ui, Roboto, 'Open Sans', Helvetica, Arial,
      sans-serif;

    --color-white: #ffffff;
    --color-orange: #fdb900;
    --color-purple: #512da8;
    --color-black: #000000;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
</style>
