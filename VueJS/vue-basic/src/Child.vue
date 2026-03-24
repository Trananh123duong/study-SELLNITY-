<script setup>
</script>

<template>
  <div class="modal">
    <div class="modal-header">
      <slot name="header"></slot>
    </div>

    <div class="modal-body">
      <slot></slot>
    </div>
  </div>
</template>