<template>
  <article class="blog__details_sort">
    <h2 class="blog__details_title">
      {{ article.title }}
    </h2>
    <img class="blog__details_img" :src="article.imgPath" alt="{{ article.imgAlt }}" />
    <div class="sort__date">
      <p class="sort__date_text">{{ article.date }}</p>
      <p class="sort__date_text">Interior / Home / Decore</p>
    </div>
    <p class="blog__details_text">
      {{ article.text1 }}
    </p>
    <br />
    <p class="blog__details_text">
      {{ article.text2 }}
    </p>
  </article>
</template>

<script>
export default {
  props: {
    article: Object,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/_var.scss";

.blog__details_sort {
  .sort__date {
    margin-top: 47px;
    margin-bottom: 47px;
    display: flex;
    gap: 409px;
    &_text {
      font-family: $font-family;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.01em;
      text-transform: capitalize;
      color: #4d5053;
    }
  }
}
</style>
