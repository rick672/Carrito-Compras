<script setup lang="ts">
import { useProductStore } from '@/stores/product.store';
import { useModalStore } from '@/stores/modal.store';
const { closeModal } = useModalStore();
const productCards = useProductStore();


</script>
<template>
    <div class="p-6 bg-base-300 rounded-lg shadow-md border-2 border-base-100 ">
        <div class="flex items-center justify-between mb-4 border-b pb-2">
            <h2 class="text-2xl font-semibold text-gray-300">🛒 Carrito</h2>
            <button @click="closeModal"
                class="text-md text-white p-2 rounded-full hover:bg-gray-100 transition cursor-pointer">
                ✖
            </button>
        </div>
        <div v-if="productCards.products.quantity() === 0" class="text-center text-gray-500 py-8">
            <p class="text-lg">🛍 No hay artículos en el carrito</p>
        </div>

        <div v-else class="overflow-x-auto">
            <div class="mt-2 space-y-3">
                <div v-for="product in productCards.products.selectedProduct" :key="product.id"
                    class="flex items-center gap-4 bg-base-200 rounded-xl p-3 shadow-sm">
                    <!-- Imagen -->
                    <img :src="product.img" alt="product image" class="w-25 h-25 object-cover rounded-xl" />

                    <!-- Nombre y precio -->
                    <div class="flex-1 mr-18">
                        <p class="text-lg font-medium">{{ product.name }}</p>
                        <p class="text-2xl font-bold text-gray-300">Bs. {{ product.price.toFixed(2) }}</p>
                    </div>

                    <!-- Controles de cantidad -->
                    <div class="flex items-center gap-2 ml-18">
                        <button @click="productCards.removeProduct(product)"
                            class="btn hover:bg-red-700 px-2" title="Quitar uno">
                            ➖
                        </button>
                        <span class="text-xl font-bold w-5 text-center">{{ product.quantity }}</span>
                        <button @click="productCards.addProduct(product)"
                            class="btn hover:bg-green-600 px-2" title="Agregar uno">
                            ➕
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex justify-around py-4">
                <span>
                    <strong class="text-2xl">{{ productCards.products.selectedProduct.length }}</strong> Productos
                </span>
                <span>
                    <strong class="text-2xl">{{ productCards.products.quantity() }}</strong> Unidades
                </span>
            </div>

        </div>
    </div>

</template>