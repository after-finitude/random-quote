<div class="base-layout">
  <slot />
</div>

<style lang="scss">
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
