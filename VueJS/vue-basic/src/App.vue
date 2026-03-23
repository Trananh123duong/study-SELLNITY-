<script setup>
import { ref } from 'vue';

const message = ref('Hello Vue')
const imageUrl = ref('https://via.placeholder.com/100')
</script>

<template>
  <p>{{ message }}</p>
  <img :src="imageUrl" />
</template>