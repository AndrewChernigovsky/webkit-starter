<template>
  <div class="product" :key="product.id">
    <img
      class="product__image"
      :src="product.imageUrl"
      :alt="product.title"
      width="350"
      height="350"
    />

    <div class="product__info">
      <h3>{{ product.title }}</h3>
      <p>
        Вес: <span>{{ product.weight }}</span> кг
      </p>
      <p>{{ product.description }}</p>
      <span>{{ product.cost }} руб.</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss">
.product {
  width: 350px;
  min-height: 300px;
  background-color: $red;
  display: grid;

  &__image {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    padding: 10px;
  }
}
</style>
