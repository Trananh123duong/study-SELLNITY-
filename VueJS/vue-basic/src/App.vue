<script setup>
import { ref } from 'vue'

// state
const todos = ref([])
const newTodo = ref('')

// thêm todo
function addTodo() {
  if (!newTodo.value.trim()) return

  todos.value.push({
    id: Date.now(),
    text: newTodo.value,
    done: false
  })

  newTodo.value = ''
}

// xoá
function deleteTodo(id) {
  todos.value = todos.value.filter(t => t.id !== id)
}

// toggle done
function toggleTodo(todo) {
  todo.done = !todo.done
}
</script>

<template>
  <div>
    <h2>Todo List</h2>

    <!-- input -->
    <input 
      v-model="newTodo" 
      placeholder="Nhập công việc..."
      @keyup.enter="addTodo"
    />
    <button @click="addTodo">Thêm</button>

    <ul>
      <li 
        v-for="todo in todos" 
        :key="todo.id"
        :class="{ done: todo.done }"
      >
        <!-- toggle -->
        <span @click="toggleTodo(todo)">
          {{ todo.text }}
        </span>

        <!-- delete -->
        <button @click="deleteTodo(todo.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<style>
.done {
  text-decoration: line-through;
  color: gray;
}
</style>