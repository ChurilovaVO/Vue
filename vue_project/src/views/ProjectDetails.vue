<template>
  <div class="banner"></div>
  <div class="project-details center">
    <div class="project-details__info">
      <h1 class="project-details__info_title">{{ projectDetailTitle }}</h1>
      <p class="project-details__info_text">{{ projectDetailText1 }}</p>
      <br />
      <p class="project-details__info_text">{{ projectDetailText2 }}</p>
    </div>
    <div class="project-details__slider">
      <swiper
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }"
        :zoom="true"
        :navigation="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="@/assets/img/project/projectDetail/slider/slider_1.png" />
          </div> </swiper-slide
        ><swiper-slide>
          <div class="swiper-zoom-container">
            <img src="@/assets/img/project/projectDetail/slider/slider_2.png" />
          </div> </swiper-slide
        ><swiper-slide>
          <div class="swiper-zoom-container">
            <img src="@/assets/img/project/projectDetail/slider/slider_3.png" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper/modules";

export default {
  computed: {
    ...mapState(["projectDetailTitle", "projectDetailText1", "projectDetailText2"]),
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_var.scss";

.banner {
  background-image: url(@/assets/img/banner/project_detail_banner.png);
}
.project-details__info {
  max-width: 658px;
  margin-left: calc(50% - 329px);
  margin-bottom: 100px;
  &_title {
    font-family: $second-family;
    font-weight: 400;
    font-size: 50px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: #292f36;
    margin-bottom: 11px;
  }
  &_text {
    font-family: $font-family;
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #4d5053;
  }
}

.project-details__slider {
  margin-bottom: 200px;
}

#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

body {
  background: #000;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  overflow: hidden;
}
</style>
