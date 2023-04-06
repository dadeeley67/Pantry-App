<template>
  <div>
    <div
      class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
    >
      <div>
        <div class="text-xl font-medium text-black">{{ product.name }}</div>
        <p class="text-slate-500">Price: ${{ product.price }}</p>
        <p class="text-slate-500">Stock: {{ product.quantity }}</p>
      </div>
    </div>

    <div class="flex mx-auto my-4">
      <button
        @click="$emit('removeProduct', product.id)"
        class="p-2 max-w-sm mx-auto bg-slate-500 rounded-md shadow-lg border-2 border-black"
      >
        Remove
      </button>
      <button
        @click="$emit('updateProduct', product.id, price, quantity)"
        class="p-2 max-w-sm mx-auto bg-slate-500 rounded-md shadow-lg border-2 border-black"
      >
        Update
      </button>
    </div>
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
