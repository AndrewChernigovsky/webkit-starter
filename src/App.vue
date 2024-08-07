<template>
  <div>
    <Header />
    <main class="main"><router-view /></main>
    <Footer />
    <svg width="50" height="50">
      <use xlink:href="#facebook" />
    </svg>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue';
import { startJS } from '@/custom/index';

onMounted(() => {
  nextTick(() => {
    startJS();
  });
});
</script>

<style></style>
