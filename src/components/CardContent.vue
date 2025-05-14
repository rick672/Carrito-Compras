<script setup lang="ts">
import { useProductStore } from '@/stores/product.store';
import { useModalStore } from '@/stores/modal.store';
const { closeModal } = useModalStore();
const productCards = useProductStore();


</script>
<template>
    <div class="p-6 bg-base-100 rounded-lg shadow-md">
        <div class="flex items-center justify-between mb-4 border-b pb-2">
            <h2 class="text-2xl font-semibold">🛒 Carrito</h2>
            <button @click="closeModal"
                class="text-md text-white p-2 rounded-full hover:bg-gray-100 transition cursor-pointer">
                ✖
            </button>
        </div>
        <p class="text-lg mb-4">
            Productos distintos: <strong>{{ productCards.products.selectedProduct.length }}</strong>,
            Total unidades: <strong>{{ productCards.products.quantity() }}</strong>
        </p>
        <div v-if="productCards.products.quantity() === 0" class="text-center text-gray-500 py-8">
            <p class="text-lg">🛍 No hay artículos en el carrito</p>
        </div>

        <div v-else class="overflow-x-auto">
            <table class="table ">
                <!-- head -->
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>PRECIO</th>
                        <th>CANTIDAD</th>
                        <th>IMAGEN</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in productCards.products.selectedProduct" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>
                            <img :src="product.img" alt="product image" class="w-10 h-10">
                        </td>
                        <td>
                            <!-- Agregar y eliminar -->
                            <button @click="productCards.removeProduct(product)"
                                class="text-white px-3 py-1 rounded hover:bg-gray-200 transition cursor-pointer">
                                🗑
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>