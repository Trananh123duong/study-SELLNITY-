<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

// 🔵 (4) state riêng
const name = ref('')
const age = ref(0)

// 🔵 (5) handler riêng
function handleName(data) {
  name.value = data
}

function handleAge(data) {
  age.value = data
}
</script>

<template>
  <p>Tên: {{ name }}</p>
  <p>Tuổi: {{ age }}</p>

  <!-- 🔵 (6) lắng nghe nhiều event -->
  <Child 
    @sendName="handleName"
    @sendAge="handleAge"
  />
</template>