<script setup>
import Child from './Child.vue'
</script>

<template>
  <Child>
    <template v-slot:header>
      <h2>Xác nhận Header</h2>
    </template>

    <p>Bạn có chắc không?</p>
  </Child>
</template>