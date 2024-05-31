<template>
  <div class="banner__heading">
    <h1 class="banner__heading_title">{{ bannerHeadList[index].title }}</h1>
    <h5 class="banner__heading_text">{{ bannerHeadList[index].text }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
  },
  data() {
    return {
      bannerHeadList: [
        {
          title: "Articles & News",
          text: "Home / Blog",
        },
        {
          title: "Our Project",
          text: "Home / Project",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_var.scss";

.banner__heading {
  border-radius: 37px 37px 0 0;
  padding: 41px 78px;
  width: 503px;
  height: 178px;
  background: #fff;
  box-sizing: border-box;
  text-align: center;
  &_title {
    font-family: $second-family;
    font-weight: 400;
    font-size: 50px;
    line-height: 125%;
    color: #292f36;
  }
  &_text {
    font-family: $font-family;
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #4d5053;
    text-align: center;
  }
}
</style>
