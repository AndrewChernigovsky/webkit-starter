<template>
  <section class="products container">
    <h2 class="secondary-title">Горячие закуски</h2>
    <ul class="products-list">
      <li v-for="product in products" :key="product.id">
        <Product :product="product" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useDataStore } from '@/store/data';

const dataStore = useDataStore();
const products = ref([]);

// ref[] это реактивная переменная внутри Vue
// Нажми на путь ссылки ctrl+click <a href="https://playcode.io/1962764">
// Тут я написал код для иммитации работы ref под капотом на виниле, чтобы было понимание того зачем это нужно

const loadData = async () => {
  const url = 'https://andrey-andreevich.ru/api.php';
  await dataStore.fetchData(url);
  products.value = dataStore.getData;
};

loadData();
</script>

<style lang="scss">
.products-list {
  display: flex;
  gap: 10px;
}
</style>
