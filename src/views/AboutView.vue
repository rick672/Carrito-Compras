<script setup lang="ts">
import { useProductStore } from "@/stores/product.store";

const { products, addProduct } = useProductStore();

console.log(products);
</script>

<template>
    <div class="pt-16">
        <hr>
        <div class="text-white text-center mt-6" style="font-family: 'Times New Roman', Times, serif;">
            <h3 class="text-5xl font-bold" >NOVEDADES</h3>
            <p class="m-2 text-md">Descubre nuestra colección de relojes únicos</p>
        </div>
        <br>
        <div class="">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 text-center">
                <div 
                    v-for="product in products.availableProducts" 
                    :key="product.id"
                    class="card hover:border border-gray-600/20 pb-2 rounded-xl gap-2 bg-white/5"
                >
                    <img 
                        :src="product.img" 
                        alt="product image" 
                        class="rounded-t-xl"
                    >
                    <p class="text-md">{{ product.name }}</p>
                    <p class="text-2xl font-bold">Bs. {{ product.price.toFixed(2) }}</p>
                    <div class="flex justify-center mt-2">
                        <button 
                            @click="addProduct(product)"
                            class="btn bg-base-300 text-white border-none hover:bg-red-700 transition duration-300 w-32"
                        >
                            🛒 COMPRAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
