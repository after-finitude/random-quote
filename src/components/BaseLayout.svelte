<div class="base-layout">
  <slot />
</div>

<style lang="scss">
  :root {
    --color-white: #ffffff;
    --color-orange: #fdb900;
    --color-purple: #512da8;
    --color-black: #000000;
  }

  :global(body) {
    font-family: Roboto;
    font-weight: 600;
  }

  .base-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
</style>
