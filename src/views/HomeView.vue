<script setup lang="ts">
</script>

<template>
  <section
    class="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white flex items-center justify-center relative overflow-hidden"
  >
    <!-- Imagen decorativa -->
    <img
      src="https://thumbs.dreamstime.com/b/hombre-con-el-traje-y-el-reloj-mano-38977217.jpg"
      alt="Luxury Watch"
      class="absolute inset-0 w-full h-full object-cover opacity-20"
    />

    <!-- Capa oscura -->
    <div class="absolute inset-0 bg-black/60 opacity-50"></div>

    <!-- Contenido principal -->
    <div class="relative z-10 text-center px-6 max-w-2xl space-y-6">
      <h1 class="text-5xl font-extrabold leading-tight drop-shadow-md">
        Descubre la Elegancia
      </h1>
      <p class="text-lg text-gray-300">
        Relojes únicos para quienes aprecian la precisión, el estilo y la excelencia.
      </p>
      <RouterLink
        to="/about"
        class="btn bg-base-300  border-none text-white shadow-lg hover:scale-105 transition-transform"
      >
        Ver Productos
      </RouterLink>
      <!-- <RouterLink
        to="/about"
        class="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none text-white shadow-lg hover:scale-105 transition-transform"
      >
        Ver Productos
      </RouterLink> -->
    </div>
  </section>
</template>
