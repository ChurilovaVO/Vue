<template>
  <section class="banner__content center">
    <img class="banner__banner" src="@/assets/img/banner/index_banner.png" alt="banner" />
    <div class="banner__info">
      <h1 class="banner__info_title">Let Your Home Be Unique</h1>
      <p class="banner__info_text">
        There are many variations of the passages of lorem Ipsum fromavailable, majority.
      </p>
      <router-link to="/project" class="banner__info_button">
        Get Started
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
            stroke="#CDA274"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
  </section>
  <section class="project center">
    <div class="project__heading">
      <h2 class="project__heading_title">Follow Our Projects</h2>
      <p class="project__heading_text">
        It is a long established fact that a reader will be distracted by the of readable
        content of page lookings at its layouts points.
      </p>
    </div>
    <div class="project__content">
      <div class="project__block">
        <div class="project__item">
          <img
            class="project__item_img first"
            src="@/assets/img/project/photo_1.png"
            alt="photo_1.png"
          />
          <div class="project__item_subcontent">
            <div class="subcontent__info">
              <h4 class="subcontent__info_title">Modern Kitchan</h4>
              <p class="subcontent__info_text">Decor / Artchitecture</p>
            </div>
            <button class="subcontent__button">
              <svg
                width="10"
                height="20"
                viewBox="0 0 10 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 19L9 10L1 1"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="project__item">
          <img
            class="project__item_img second"
            src="@/assets/img/project/photo_2.png"
            alt="photo_2.png"
          />
          <div class="project__item_subcontent">
            <div class="subcontent__info">
              <h4 class="subcontent__info_title">Modern Kitchan</h4>
              <p class="subcontent__info_text">Decor / Artchitecture</p>
            </div>
            <button class="subcontent__button">
              <svg
                width="10"
                height="20"
                viewBox="0 0 10 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 19L9 10L1 1"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="project__block">
        <div class="project__item">
          <img
            class="project__item_img third"
            src="@/assets/img/project/photo_3.png"
            alt="photo_3.png"
          />
          <div class="project__item_subcontent">
            <div class="subcontent__info">
              <h4 class="subcontent__info_title">Modern Kitchan</h4>
              <p class="subcontent__info_text">Decor / Artchitecture</p>
            </div>
            <button class="subcontent__button">
              <svg
                width="10"
                height="20"
                viewBox="0 0 10 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 19L9 10L1 1"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="project__item">
          <img
            class="project__item_img fourth"
            src="@/assets/img/project/photo_4.png"
            alt="photo_4.png"
          />
          <div class="project__item_subcontent">
            <div class="subcontent__info">
              <h4 class="subcontent__info_title">Modern Kitchan</h4>
              <p class="subcontent__info_text">Decor / Artchitecture</p>
            </div>
            <button class="subcontent__button">
              <svg
                width="10"
                height="20"
                viewBox="0 0 10 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 19L9 10L1 1"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="counter">
    <div class="counter__item">
      <h3 class="counter__item_number">12</h3>
      <div class="counter__item_text">Years Of Experiance</div>
    </div>
    <div class="counter__item">
      <h3 class="counter__item_number">85</h3>
      <div class="counter__item_text">Success Project</div>
    </div>
    <div class="counter__item">
      <h3 class="counter__item_number">19</h3>
      <div class="counter__item_text">Active Project</div>
    </div>
    <div class="counter__item">
      <h3 class="counter__item_number">95</h3>
      <div class="counter__item_text">Happy CUstomers</div>
    </div>
  </div>
  <section class="blog center">
    <div class="blog__heading">
      <h2 class="blog__heading_title">Articles & News</h2>
      <p class="blog__heading_text">
        It is a long established fact that a reader will be distracted by the of readable
        content of a page when lookings at its layouts the points of using.
      </p>
    </div>
    <BlogItemListComp :showLess="true" />
  </section>
  <FooterComp />
</template>

<script>
import BlogItemListComp from "@/components/BlogItemListComp.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  components: {
    BlogItemListComp,
    FooterComp,
  },
};
</script>
