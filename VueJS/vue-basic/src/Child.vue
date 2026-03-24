<script setup>
// 🟢 (1) khai báo nhiều event
const emit = defineEmits(['sendName', 'sendAge'])

function sendName() {
  // 🟢 (2) event 1
  emit('sendName', 'Dương')
}

function sendAge() {
  // 🟢 (3) event 2
  emit('sendAge', 26)
}
</script>

<template>
  <button @click="sendName">Gửi tên</button>
  <button @click="sendAge">Gửi tuổi</button>
</template>