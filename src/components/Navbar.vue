<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useModalStore } from '@/stores/modal.store';
import Modal from './Modal.vue';
import { useProductStore } from '@/stores/product.store';
import CardContent from './CardContent.vue';
const { modalValue, openModal } = useModalStore();

const products = useProductStore();
const isAtTop = ref(true);

onMounted(() => {
    window.addEventListener('scroll', () => {
        isAtTop.value = window.scrollY < 50; // Ajusta este valor según tu imagen
    });
});
</script>

<template>
    <div 
        class="navbar fixed top-0 left-0 right-0 bg-transparent backdrop-blur-lg shadow-md transition-all duration-500 z-50"
         :class="{ 'bg-white/80': !isAtTop }"
    >
        <div class="flex-1">
            <RouterLink to="/" class="btn btn-ghost text-2xl">⌚ Store</RouterLink>
        </div>

        <div class="flex-none flex items-center gap-3">
            <!-- Enlaces simples -->
            <!-- <a class="btn btn-ghost normal-case" @click="openModal">🛒</a> -->

            
            <RouterLink to="/about" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 8h14l-1.5 12h-11L5 8zm3 0V6a4 4 0 118 0v2" />
                </svg>
            </RouterLink>



            <!-- Carrito -->
            <div 
                class="btn btn-ghost btn-circle" 
                @click="openModal"
            >
                <div class="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span class="badge badge-sm badge-primary indicator-item">
                    {{ products.products.quantity() }}
                    </span>
                </div>
            </div>

            <!-- Avatar -->
            <div class="dropdown dropdown-end px-2">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img alt="Avatar"
                            src="https://avatars.githubusercontent.com/u/153690389?v=4" />
                    </div>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a href="https://github.com/rick672" class="justify-between">Profile <span class="badge">New</span></a></li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
    <Modal v-if="modalValue.isOpen">
        <CardContent />
    </Modal>
</template>
