<script setup>
import { ref } from 'vue';

const name = ref('')
</script>

<template>
  <input v-model="name" />
  <p>Hello {{ name }}</p>
</template>