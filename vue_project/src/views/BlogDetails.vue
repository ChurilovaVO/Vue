<template>
  <div
    class="banner"
    style="background-image: require(url(@/assets/img/banner/blog_banner.jpg))"
  ></div>
  <div class="blog-content center" id="blog-details">
    <div class="blog__details">
      <ArticleComponent
        v-for="(article, index) in articleList"
        :key="index"
        :article="article"
      ></ArticleComponent>

      <div class="blog__details_quotes">
        <h2 class="quotes_icon">“</h2>
        <div class="quotes_text">
          The details are not the details.
          <br />
          They make the design.
        </div>
      </div>
      <article class="blog__details_articles">
        <h2 class="blog__details_title">Design sprints are great</h2>
        <p class="blog__details_text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
          in.Contrary to popular belief.There are many variations of passages of Lorem
          Ipsum available, but the majority have suffered.
        </p>
        <ol class="article_list">
          <li class="blog__details_text">
            Contrary to popular belief.There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered.
          </li>
          <li class="blog__details_text">
            Contrary to popular belief.There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered.
          </li>
          <li class="blog__details_text">
            Contrary to popular belief.There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered.
          </li>
        </ol>
        <img
          class="blog__details_img"
          src="@/assets/img/blog_details/article_end.png"
          alt="article_end photo"
        />
        <p class="blog__details_text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
          in.Contrary to popular belief.There are many variations of passages of Lorem
          Ipsum available, but the majority have suffered.
        </p>
      </article>
    </div>
    <div class="sidebar">
      <h4 class="sidebar_title">Tags</h4>
      <div class="sidebar__tags">
        <div class="sidebar__tags_block">
          <button @click="sortTagName('kitchen')" class="sidebar__tag_button">
            Kitchen
          </button>
          <button @click="sortTagName('bedroom')" class="sidebar__tag_button">
            Bedroom
          </button>
        </div>
        <div class="sidebar__tags_block">
          <button @click="sortTagName('building')" class="sidebar__tag_button">
            Building
          </button>
          <button @click="sortTagName('architecture')" class="sidebar__tag_button">
            Architecture
          </button>
        </div>
        <div class="sidebar__tags_block">
          <button @click="sortTagName('kitchen planning')" class="sidebar__tag_button">
            Kitchen Planning
          </button>
          <button @click="sortTagName('bedroom')" class="sidebar__tag_button">
            Bedroom
          </button>
        </div>
      </div>
    </div>
  </div>
  <FooterComp />
</template>

<script>
import ArticleComponent from "@/components/ArticleComponent.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  data() {
    return {
      articleList: [
        {
          title: "Let’s Get Solution for Building Construction Work",
          tag: "kitchen",
          imgPath: require("@/assets/img/blog_details/article_1.png"),
          imgAlt: "article_1 photo",
          date: "26 December,2022",
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don`t look even slightly believable.",
          text2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
        {
          title: 'Article by tag "bedroom"',
          tag: "bedroom",
          imgPath: require("@/assets/img/blog_details/article_2.png"),
          imgAlt: "article_2 photo",
          date: "30 December,2023",
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.",
          text2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
        {
          title: 'Article by tag "Building"',
          tag: "building",
          imgPath: require("@/assets/img/blog_details/article_3.png"),
          imgAlt: "article_3 photo",
          date: "15 December,2022",
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don`t look even slightly believable.",
          text2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
        {
          title: 'Article by tag "Architecture"',
          tag: "architecture",
          imgPath: require("@/assets/img/blog_details/article_4.png"),
          imgAlt: "article_3 photo",
          date: "1 December,2023",
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.",
          text2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
        {
          title: 'Article by tag "Kitchen Planning"',
          tag: "kitchen planning",
          imgPath: require("@/assets/img/blog_details/article_5.png"),
          imgAlt: "article_3 photo",
          date: "16 December,2023",
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.",
          text2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
      ],
    };
  },
  methods: {
    sortTagName(tag) {
      let count = 0;
      this.articleList.forEach((article) => {
        if (article.tag === tag) {
          this.articleList.splice(count, 1);
          this.articleList.splice(0, 0, article);
        }
        count++;
      });
    },
  },
  components: {
    ArticleComponent,
    FooterComp,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  background-image: url(@/assets/img/banner/blog_banner.jpg);
}
</style>
