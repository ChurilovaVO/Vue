<template>
  <div class="project__item">
    <img class="project__item_img" :src="projectItem.imgPath" alt="photo_1.png" />
    <div class="project__item_subcontent">
      <div class="subcontent__info">
        <h4 class="subcontent__info_title">{{ projectItem.title }}</h4>
        <p class="subcontent__info_text">{{ projectItem.category }}</p>
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
</template>

<script>
export default {
  props: {
    projectItem: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_var.scss";
.project__item {
  width: 585px;
  position: relative;
  z-index: 1;
  &_img {
    width: inherit;
  }
  &_subcontent {
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
    .subcontent__info {
      &_title {
        font-family: $second-family;
        font-weight: 400;
        font-size: 25px;
        line-height: 125%;
        letter-spacing: 0.02em;
        color: #292f36;
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
  }
  &:hover .project__item_img {
    opacity: 0.5;
  }
  &:active::before {
    position: absolute;
    top: 0;
    right: 0;
    content: url("data:image/svg+xml,%3Csvg width='36' height='35' viewBox='0 0 36 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d_993_156)'%3E%3Cpath d='M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z' fill='%23FFA928'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d_993_156' x='0.186424' y='0.431396' width='35.6271' height='34.3619' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='4'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_993_156'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_993_156' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A");
    color: black;
    z-index: 2;
  }
}
.subcontent__button {
  border-radius: 100%;
  fill: #f4f0ec;
  width: 70px;
  height: 70px;
  border: none;
  &:hover {
    background-color: $colorSite;
  }
  &:active {
    transform: scale(0.95);
  }
}
</style>
