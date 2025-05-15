<script setup lang="ts">
import { Teleport } from 'vue';
import CardContent from './CardContent.vue';



</script>
<template>
    <div>
        <Teleport to="body">
            <div class="fixed inset-0 z-[9999] bg-black/80 flex justify-center items-center">
                <div class="max-h-screen overflow-y-auto py-4">
                    <slot>
                        <CardContent />
                    </slot>
                </div>
            </div>
        </Teleport>
    </div>
</template>