<style lang="scss">
  .container {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    height: 100%;
    width: 50%;
    padding: 30px 20px;
    margin-top: 50px;

    @media screen and (max-width: 768px) {
      width: 85%;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 90%;
    }

    @media screen and (min-width: 1024px) and (max-width: 1240px) {
      width: 90%;
    }
  }
</style>

<div class="container">
  <slot />
</div>
