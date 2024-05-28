<template>
  <div v-if="showLess" class="blog__content">
    <BlogItemComp v-for="item in listItems.slice(0, 3)" :key="item.id" :blogItem="item">
      {{ item }}
    </BlogItemComp>
  </div>
  <div v-else class="blog__content">
    <BlogItemComp v-for="item in listItems" :key="item.id" :blogItem="item">
      {{ item }}
    </BlogItemComp>
  </div>
</template>

<script>
import BlogItemComp from "@/components/BlogItemComp.vue";
export default {
  props: {
    showLess: Boolean,
  },
  data() {
    return {
      listItems: [
        {
          id: 1,
          img: require("@/assets/img/blog_item/blog_item_photo_1.png"),
          tag: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          id: 2,
          img: require("@/assets/img/blog_item/blog_item_photo_2.png"),
          tag: "Living Design",
          title: "Low Cost Latest Invented Interior Designing",
          date: "22 December,2022",
        },
        {
          id: 3,
          img: require("@/assets/img/blog_item/blog_item_photo_3.png"),
          tag: "Interior Design",
          title: "Best For Any Office & Business Interior",
          date: "25 December,2022",
        },
        {
          id: 4,
          img: require("@/assets/img/blog_item/blog_item_photo_4.png"),
          tag: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          id: 5,
          img: require("@/assets/img/blog_item/blog_item_photo_5.png"),
          tag: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        {
          id: 6,
          img: require("@/assets/img/blog_item/blog_item_photo_6.png"),
          tag: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
      ],
    };
  },
  components: {
    BlogItemComp,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_var.scss";

.blog__content {
  margin-top: 52px;
  display: flex;
  flex-wrap: wrap;
  gap: 27px;
}
</style>
