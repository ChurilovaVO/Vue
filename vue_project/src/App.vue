<template>

<!-- <ProductDetails/>
 -->
 <!--  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/blog">Blog</router-link>
  </nav> -->
  <router-view/>

</template>

<script>
import ProductDetails from '@/components/ProductDetails.vue'

    export default {
        components: { ProductDetails },
    }
</script>

<style lang="scss">

</style>
