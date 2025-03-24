<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
  const nuxtApp = useNuxtApp();
  console.log('nuxtApp: ', nuxtApp);

  //provide 활용
  // nuxtApp.provide('hello', (msg: string) => `Hello ${msg}`);
</script>