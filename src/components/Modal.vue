<script setup lang="ts">
import { Teleport } from 'vue';
import CardContent from './CardContent.vue';



</script>
<template>
    <div>
        <Teleport to="body">
            <div class="fixed inset-0 bg-black/50 flex justify-center items-center ">
                <div class="">
                    <slot>
                        <CardContent />
                    </slot>
                    <!-- <button @click="closeModal">
                        Cerrar
                    </button> -->
                </div>
            </div>
        </Teleport>
    </div>
</template>