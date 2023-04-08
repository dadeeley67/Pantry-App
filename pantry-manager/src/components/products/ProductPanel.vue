<template>
  <!-- <div> -->
  <!-- <div
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
    </div> -->
  <td class="whitespace-nowrap px-6 py-4">{{ product.name }}</td>
  <td class="whitespace-nowrap px-6 py-4">{{ product.price }}</td>
  <td class="whitespace-nowrap px-6 py-4">{{ product.quantity }}</td>
  <td class="whitespace-nowrap px-6 py-4">{{ product.category }}</td>
  <td class="whitespace-nowrap px-6 py-4">{{ product.unit }}</td>
  <td class="whitespace-nowrap px-6 py-4">{{ product.location }}</td>
  <td class="whitespace-nowrap px-6 py-4">{{ product.expirationDate }}</td>
  <td class="whitespace-nowrap px-6 py-4">{{ product.notes }}</td>
  <td class="whitespace-nowrap px-6 py-4">
    <button
      @click="toggleUpdateProductModal()"
      class="p-2 max-w-sm mx-auto bg-slate-500 rounded-md shadow-lg border-2 border-black"
    >
      Edit
    </button>
  </td>

  <td class="whitespace-nowrap px-6 py-4">
    <button
      @click="removeProduct(product.id)"
      class="p-2 max-w-sm mx-auto bg-slate-500 rounded-md shadow-lg border-2 border-black"
    >
      Remove
    </button>
  </td>
  <UpdateProductModal
    v-if="showUpdateProductModal"
    @close="toggleUpdateProductModal"
    :product="product"
  />
  <!-- </div> -->
</template>

<script setup>
import { ref } from "vue";

import { useStore } from "vuex";

import UpdateProductModal from "./UpdateProductModal.vue";

const store = useStore();
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const showUpdateProductModal = ref(false);

const toggleUpdateProductModal = () => {
  showUpdateProductModal.value = !showUpdateProductModal.value;
};

const removeProduct = (id) => {
  store.dispatch("removePantryItem", id);
};

let product = ref(props.product);
</script>
