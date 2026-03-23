<script setup>
import { ref } from 'vue'

const count = ref(0)

// tăng
function increase() {
  count.value++
}

// giảm
function decrease() {
  count.value--
}

// reset
function reset() {
  count.value = 0
}

// chỉ chạy 1 lần
function special() {
  alert('Chỉ chạy 1 lần!')
}
</script>

<template>
  <div>
    <h2>Counter: {{ count }}</h2>

    <!-- tăng -->
    <button @click="increase">+</button>

    <!-- giảm -->
    <button @click="decrease">-</button>

    <br /><br />

    <!-- nhấn Enter để reset -->
    <input 
      placeholder="Nhấn Enter để reset"
      @keyup.enter="reset"
    />

    <br /><br />

    <!-- chỉ chạy 1 lần -->
    <button @click.once="special">
      Click 1 lần
    </button>
  </div>
</template>