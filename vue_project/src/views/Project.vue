<template>
  <HeaderComp />
  <div class="banner">
    <HeaderBannerComp :index="1" />
  </div>
  <div class="projects">
    <div class="project__category">
      <button @click="sortProjectsOfType('bathroom')" class="project__category_button">
        Bathroom
      </button>
      <button @click="sortProjectsOfType('bedroom')" class="project__category_button">
        Bed Room
      </button>
      <button @click="sortProjectsOfType('kitchan')" class="project__category_button">
        Kitchan
      </button>
      <button @click="sortProjectsOfType('living area')" class="project__category_button">
        Living Area
      </button>
    </div>
    <div class="projects__project">
      <ProjectListForProjectsView :projectList="nameSort" />
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

  <FooterComp />
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import HeaderBannerComp from "@/components/HeaderBannerComp.vue";
import ProjectListForProjectsView from "@/components/project_items/ProjectListForProjectsView.vue";
export default {
  data() {
    return {
      nameSort: "bedroom",
    };
  },
  components: {
    HeaderComp,
    HeaderBannerComp,
    ProjectListForProjectsView,
    FooterComp,
  },
  methods: {
    sortProjectsOfType(sortType) {
      this.nameSort = sortType;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_var.scss";

.banner {
  background-image: url(@/assets/img/banner/project_banner.jpg);
}

.projects {
  margin: 200px 0px 200px 0px;
  display: flex;
  flex-direction: column;
  gap: 61px;
}
.project__category {
  text-align: center;
  &_button {
    font-family: $font-family;
    font-weight: 600;
    font-size: 18px;
    line-height: 125%;
    letter-spacing: 0.02em;
    text-align: center;
    color: #292f36;
    width: 219px;
    height: 75px;
    border: none;
    background-color: transparent;
    &:hover {
      border-radius: 18px;
      border: 1px solid #cda274;
    }
    &:focus {
      border-radius: 18px;
      background: #cda274;
      color: #fff;
    }
  }
}
</style>
