<script setup>
import Child from './Child.vue';

// 🔵 (1) DATA GỐC nằm ở parent
const name = 'Dương'
const age = 26
const isOnline = true
</script>

<template>
  <!-- 🔵 (2) TRUYỀN PROPS xuống child -->
  <Child :name="name" :age="age" :isOnline="isOnline" />
</template>