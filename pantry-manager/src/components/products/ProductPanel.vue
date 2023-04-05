<template>
  <div>
    <span>{{ product.name }}</span>
    <span>{{ product.price }}</span>
    <span>{{ product.quantity }}</span>
    <button @click="$emit('removeProduct', product.id)">Remove</button>
    <button @click="$emit('updateProduct', product.id, price, quantity)">
      Update
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

let product = ref(props.product);
</script>
