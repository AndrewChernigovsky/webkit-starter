<template>
  <header>
    <nav>
      <router-link active-class="active"  to="/">Catalog</router-link>
      <router-link active-class="active"  to="/cart">Cart</router-link>
      <router-link  active-class="active" to="/sellers">Sellers</router-link>
    </nav>
  </header>
</template>

<script setup>
</script>

<style>
nav {
  display: flex;
  gap: 20px;
}
.active {
  font-weight: bold;
  color: #333;
}
</style>
