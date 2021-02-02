<script lang="ts">
</script>

<div class="container">
  <div class="container__description">
    <div class="container__title">Эрик Рис</div>

    <div class="container__subtitle">
      «Бизнес с нуля. Метод Lean Startup для быстрого тестирования идей и выбора
      бизнес-модели»
    </div>

    <div class="container__text">
      Основа метода экономичного стартапа, разработанного автором, заключается в
      быстром тестировании идей на реальных потребителях и постоянной
      корректировке бизнес-модели — чтобы начинать масштабные вложения в продукт
      только тогда, когда идея ...
    </div>

    <div class="container__read-more-button">Читать далее</div>

    <button class="container__next-book-button">Следующая</button>
  </div>

  <img
    src="https://png.cmtt.space/paper-media/15/a7/3d/b00e369dd68934.png"
    class="container__image"
    alt="book_image"
  />
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: row;

    &__description {
      height: 576px;
      width: 411px;
      margin-right: 188px;
    }

    &__title {
      font-weight: 500;
      font-size: 24px;
      margin-bottom: 16px;
    }

    &__subtitle {
      font-weight: 400;
      font-size: 24px;
      margin-bottom: 32px;
      line-height: 140%;
    }

    &__text {
      font-weight: 400;
      font-size: 20px;
      margin-bottom: 8px;
      line-height: 175%;
    }

    &__read-more-button {
      color: #106edc;
      text-decoration: underline;
      font-weight: 400;
      font-size: 18px;
      margin-bottom: 53px;
      line-height: 175%;
    }

    &__next-book-button {
      color: var(--color-purple);
      cursor: pointer;
      background: transparent;
      border: 2px solid var(--color-purple);
      font-size: 20px;
      height: 64px;
      width: 208px;

      &:hover {
        color: var(--color-white);
        background-color: var(--color-purple);
      }
    }

    &__image {
      height: 576px;
      width: 411px;
    }
  }
</style>
