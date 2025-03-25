<template>
    <p class="q-mt-sm text-gray-8">
        {{ description }}
    </p>
</template>

<script setup lang="ts">
    defineProps<{ description: string }>();
</script>

<style scoped>

</style>