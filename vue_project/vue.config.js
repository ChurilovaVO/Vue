const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  /* css: {
    loaderOptions:{
      sass:{
        prependData: " @import '@/assets/style/style.scss'; "
      }
    }
  } */
})
/* module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/style/_var.scss";`
      }
    }
  }
}; */
