<template>
  <HeaderComp />
  <div class="banner">
    <div class="banner__heading">
      <h1 class="banner__heading_title">Articles & News</h1>
      <h5 class="banner__heading_text">Home / Blog</h5>
    </div>
  </div>
  <div class="vueblog center">
    <div class="latest-post">
      <h2 class="latest-post_title">Latest Post</h2>
      <div class="latest-post__item">
        <img
          class="latest-post_img"
          src="@/assets/img/latest_post/post_1.png"
          alt="latest-post"
        />
        <div class="latest-post__item_content">
          <h4 class="latest-post__content_title">
            Low Cost Latest Invented Interior Designing Ideas
          </h4>
          <div class="latest-post__item_info">
            <p class="latest-post__content_text">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim
              maximus.posuere in.Contrary to popular belief.
            </p>
            <p class="latest-post__content_text">
              Lorem Ipsum is not simply random text. It has roots in a piece of classica.
            </p>
          </div>
          <div class="latest-post__content_date">
            <p class="latest-post__date_text">26 December,2022</p>
            <button
              class="latest-post__date_button"
              @click="$router.push('blog_details')"
            >
              <svg
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.77101 15.1855L7.71387 8.49983L1.77101 1.81412"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <router-link to="/blog_details"></router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="news_block">
      <div class="news">
        <h2 class="news_title">Articles & News</h2>
        <BlogItemListComp :showLess="false" />
      </div>
      <div class="pagination">
        <button class="subcontent__button">01</button>
        <button class="subcontent__button">02</button>
        <button class="subcontent__button">03</button>
        <button class="subcontent__button">
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.55714 15L7.5 8.31429L1.55714 1.62857"
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
  <FooterComp />
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import BlogItemListComp from "@/components/BlogItemListComp.vue";

export default {
  components: {
    HeaderComp,
    FooterComp,
    BlogItemListComp,
  },
};
</script>
