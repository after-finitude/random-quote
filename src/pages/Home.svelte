<div class="container">
  <p class="container__text">Поиск случайной книги</p>
  <button class="container__button">Начать</button>
</div>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fdb900;
    border-radius: 50%;
    height: 750px;
    width: 750px;

    &__text {
      color: #ffffff;
      font-size: 24px;
      margin-bottom: 64px;
    }

    &__button {
      color: #512da8;
      background: transparent;
      border: 2px solid #512da8;
      font-size: 24px;
      height: 64px;
      width: 208px;
    }
  }
</style>
