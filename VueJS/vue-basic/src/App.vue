<script setup>
import { ref } from 'vue'

// state (data của instance)
const todos = ref([
  { id: 1, text: 'Học Vue 3', done: false },
  { id: 2, text: 'Làm bài tập', done: true },
  { id: 3, text: 'Đi chơi', done: false }
])
const newTodo = ref('')
const editingId = ref(null)

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

// bật chế độ edit
function startEdit(todo) {
  editingId.value = todo.id
}

// lưu edit
function saveEdit(todo, newText) {
  todo.text = newText
  editingId.value = null
}
</script>

<template>
  <div>
    <h1>Todo App</h1>

    <!-- input -->
    <input v-model="newTodo" placeholder="Nhập công việc..." />
    <button @click="addTodo">Thêm</button>

    <!-- list -->
    <ul>
      <li v-for="todo in todos" :key="todo.id">

        <!-- checkbox -->
        <input type="checkbox" v-model="todo.done" />

        <!-- text -->
        <span v-if="editingId !== todo.id" :style="{ textDecoration: todo.done ? 'line-through' : 'none' }">
          {{ todo.text }}
        </span>

        <!-- edit input -->
        <input v-else :value="todo.text" @keyup.enter="saveEdit(todo, $event.target.value)" />

        <!-- actions -->
        <button @click="startEdit(todo)">Sửa</button>
        <button @click="deleteTodo(todo.id)">Xoá</button>
      </li>
    </ul>
  </div>
</template>