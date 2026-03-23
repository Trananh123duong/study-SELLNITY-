<script setup>
import { ref } from 'vue';

const list = ref(['Vue', 'React', 'Angular'])
</script>

<template>
  <ul>
    <li v-for="item in list">
      {{ item }}
    </li>
  </ul>
</template>