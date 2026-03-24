<script setup>
// 🟢 (3) KHAI BÁO nhiều props
const props = defineProps({
  name: String,
  age: Number,
  isOnline: Boolean
})
</script>

<template>
  <!-- 🟢 (4) SỬ DỤNG props -->
  <div>
    <h2>Tên: {{ props.name }}</h2>
    <p>Tuổi: {{ props.age }}</p>
    <p>
      Trạng thái: 
      {{ props.isOnline ? 'Online 🟢' : 'Offline 🔴' }}
    </p>
  </div>
</template>