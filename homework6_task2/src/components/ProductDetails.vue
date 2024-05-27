<template>
    <h2> Название продукта: {{ product.name }}</h2>
    <h2> Форматированная цена: {{ formattedPrice }}</h2>
    <p v-if="product.available">Available</p>
    <p v-else>Out of stock</p>

</template>

<script>
    export default {
        data() {
            return {
                product:{
                    name: 'Хлеб',
                    price: 54,
                    available: true
                }
            }
        },
        computed:{
            formattedPrice(){
                return `$${this.product.price}`
            }
        }
    }
</script>

<style scoped>

</style>