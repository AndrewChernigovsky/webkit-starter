<template>
  <div>
    <Header />
    <main class="main"><router-view /></main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { startJS } from '@/custom/index';

onMounted(() => {
  startJS();
});
</script>

<style></style>
