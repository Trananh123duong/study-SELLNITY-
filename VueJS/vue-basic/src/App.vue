<script setup>
import { ref } from 'vue'

// state
const isLogin = ref(false)
const isChecked = ref(false)
const showModal = ref(false)

// actions
function toggleLogin() {
  isLogin.value = !isLogin.value
}

function toggleModal() {
  showModal.value = !showModal.value
}
</script>

<template>
  <div>
    <h2>Conditional Practice</h2>

    <!-- Toggle login -->
    <button @click="toggleLogin">
      Toggle Login
    </button>

    <!-- Login status -->
    <p v-if="isLogin">Welcome user</p>
    <p v-else>Please login</p>

    <hr />

    <!-- Checkbox -->
    <label>
      <input type="checkbox" v-model="isChecked" />
      Accept Terms
    </label>

    <!-- Show khi checked -->
    <p v-if="isChecked">Terms accepted</p>

    <hr />

    <!-- Modal toggle -->
    <button @click="toggleModal">
      Toggle Modal
    </button>

    <!-- Modal dùng v-show -->
    <div 
      v-show="showModal"
      style="border: 1px solid black; padding: 10px; margin-top: 10px;"
    >
      <p>This is a modal</p>
      <button @click="toggleModal">Close</button>
    </div>
  </div>
</template>