<script setup lang="ts">
import { useProductStore } from "@/stores/product.store";

const { products, addProduct } = useProductStore();

console.log(products);
</script>

<template>
    <div>
        <hr>
        <div class="text-white text-center">
            <h3>Seleccione un producto</h3>
        </div>
        <br>
        <div class="flex flex-wrap justify-center ">
            <div class="grid grid-cols-5 gap-2 text-center">
                <div 
                    v-for="product in products.availableProducts" 
                    :key="product.id"
                    class="card border p-2"
                >
                    <img 
                        :src="product.img" 
                        alt="product image" 
                        class="rounded-xl"
                    >
                    <p class="text-lg font-bold">{{ product.name }}</p>
                    <p class="text-lg font-bold">${{ product.price }}</p>
                    <button 
                        @click="addProduct(product)"
                        class="btn btn-primary hover:btn-primary-active"
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
