<template>
  <nav class="header center">
    <div class="logo">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
          fill="#CDA274"
        />
      </svg>
      <h3 class="logo__title">Interno</h3>
    </div>
    <div class="menubar">
      <router-link to="/" class="menubar__link">Home</router-link>
      <router-link to="/project" class="menubar__link">Project</router-link>
      <!-- <a href="blog.html" class="menubar__link">Blog</a> -->
      <router-link to="/blog" class="menubar__link">Blog</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_var.scss";

.header {
  display: flex;
  margin-top: 44px;
  margin-bottom: 57px;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  &__title {
    font-family: $second-family;
    font-weight: 400;
    font-size: 40px;
    line-height: 125%;
    color: #292f36;
  }
}

.menubar {
  display: flex;
  gap: 50px;
  &__link {
    font-family: $font-family;
    font-weight: 400;
    font-size: 20px;
    line-height: 125%;
    text-align: center;
    color: #292f36;
    &:hover {
      color: $colorSite;
    }
  }
}
</style>
