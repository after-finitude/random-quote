<script lang="ts">
  export let startSelectBook: () => void;
</script>

<div class="container">
  <p class="container__text">Поиск случайной книги</p>
  <button on:click={startSelectBook} class="container__button">Начать</button>
</div>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-orange);
    border-radius: 50%;
    height: 650px;
    width: 650px;

    &__text {
      color: var(--color-white);
      font-size: 24px;
      margin-bottom: 64px;
    }

    &__button {
      color: var(--color-purple);
      cursor: pointer;
      background: transparent;
      border: 2px solid var(--color-purple);
      font-size: 24px;
      height: 64px;
      width: 208px;

      &:hover {
        color: var(--color-white);
        background-color: var(--color-purple);
      }
    }
  }
</style>
