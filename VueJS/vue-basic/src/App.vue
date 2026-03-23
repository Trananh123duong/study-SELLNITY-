<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const age = ref(0)
const color = ref('#000000')
const isAgree = ref(false)

function submit() {
  alert('Submitted!')
}
</script>

<template>
  <div>
    <h2>Profile Form</h2>

    <!-- v-model -->
    <input v-model="name" placeholder="Name" />
    <input v-model="email" placeholder="Email" />
    <input type="number" v-model="age" />
    <input type="color" v-model="color" />

    <!-- checkbox -->
    <label>
      <input type="checkbox" v-model="isAgree" />
      Agree terms
    </label>

    <!-- interpolation -->
    <h3 :style="{ color: color }">
      Xin chào {{ name || '...' }}
    </h3>

    <p>Email: {{ email }}</p>
    <p>Age: {{ age }}</p>

    <!-- condition + class -->
    <p :class="{ warning: !isAgree }">
      {{ isAgree ? 'Đã đồng ý' : 'Bạn chưa đồng ý!' }}
    </p>

    <!-- button -->
    <button 
      :disabled="!email || !isAgree"
      @click="submit"
    >
      Submit
    </button>
  </div>
</template>