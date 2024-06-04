<template>
  <div class="not-found center">
    <div class="not-found__content">
      <div class="not-found__subcontent">
        <h1 class="not-found__subcontent_title">404</h1>
        <h2 class="not-found__subcontent_subtitle">
          We are sorry, but the page you requested was not found
        </h2>
      </div>
      <router-link to="/" class="banner__info_button">
        Back To Home
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
            stroke="#CDA274"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
    <img class="not-found__img" src="@/assets/img/not_found.png" alt="not_found" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_var.scss";

.not-found {
  display: flex;
  gap: 81px;
  .not-found__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 23px;

    .not-found__subcontent {
      &_title {
        font-family: $second-family;
        font-weight: 400;
        font-size: 250px;
        line-height: 125%;
        color: #cda274;
      }
      &_subtitle {
        font-family: $second-family;
        font-weight: 400;
        font-size: 35px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: #292f36;
        width: 569px;
      }
    }
  }
  .not-found__img {
    border-radius: 0 0 0 353px;
  }
}

.banner__info {
  &_button {
    width: 253px;
    padding: 0;
  }
}
</style>
