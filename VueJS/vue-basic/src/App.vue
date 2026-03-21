<script setup>
import { ref, reactive, computed, watch } from 'vue'

// ref (primitive)
const price = ref(100)
const quantity = ref(1)

// reactive (object)
const discount = reactive({
  percent: 10
})

// computed
const total = computed(() => {
  return price.value * quantity.value
})

const finalPrice = computed(() => {
  return total.value * (1 - discount.percent / 100)
})

// watch
watch(total, (newVal, oldVal) => {
  console.log('Total changed:', oldVal, '→', newVal)
})
</script>

<template>
  <div>
    <h2>Shopping Cart</h2>

    <div>
      <label>Price:</label>
      <input type="number" v-model="price" />
    </div>

    <div>
      <label>Quantity:</label>
      <input type="number" v-model="quantity" />
    </div>

    <div>
      <label>Discount (%):</label>
      <input type="number" v-model="discount.percent" />
    </div>

    <hr />

    <p>Total: {{ total }}</p>
    <p>Final: {{ finalPrice }}</p>
  </div>
</template>