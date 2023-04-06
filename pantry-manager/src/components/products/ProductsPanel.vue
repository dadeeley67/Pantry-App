<template>
  <div class="m-8">
    <h2 class="font-bold text-4xl mb-4">Products</h2>

    <div class="flex mx-auto">
      <button
        @click="toggleAddProductModal"
        class="p-2 max-w-sm mx-auto bg-slate-500 rounded-md shadow-lg border-2 border-black"
      >
        Add Product
      </button>
      <button
        @click="sortProductsByName"
        class="p-2 max-w-sm mx-auto bg-slate-500 rounded-md shadow-lg border-2 border-black"
      >
        Sort by Name
      </button>
      <button
        @click="sortProductsByQuantity"
        class="p-2 max-w-sm mx-auto bg-slate-500 rounded-md shadow-lg border-2 border-black"
      >
        Sort by Quantity
      </button>
    </div>

    <div class="flex mx-auto space-x-4 my-4">
      <button
        @click="sortProductsByPriceLowToHigh"
        class="p-2 max-w-sm mx-auto bg-slate-500 rounded-md shadow-lg border-2 border-black"
      >
        Sort by Price (Low to High)
      </button>
      <button
        @click="sortProductsByPriceHighToLow"
        class="p-2 max-w-sm mx-auto bg-slate-500 rounded-md shadow-lg border-2 border-black"
      >
        Sort by Price (High to Low)
      </button>
    </div>

    <AddProductModal
      v-if="showAddProductModal"
      @close="toggleAddProductModal"
    />

    <ul v-if="products.length > 0">
      <!-- Filter products by search term -->
      <label>Search Products</label>
      <input v-model="searchTerm" />

      <li v-for="product in searchProducts(searchTerm)" :key="product.name">
        <ProductPanel
          :product="product"
          @removeProduct="removeProduct"
          @updateProduct="updateProduct"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import ProductPanel from "./ProductPanel.vue";
import AddProductModal from "./AddProductModal.vue";

const store = useStore();

const products = computed(() => store.state.pantry);

const showAddProductModal = ref(false);

const searchTerm = ref("");

const toggleAddProductModal = () => {
  showAddProductModal.value = !showAddProductModal.value;
};

const removeProduct = (id) => {
  store.dispatch("removePantryItem", id);
};

const findProduct = (name) => {
  return products.value.find((product) => product.name === name);
};

const updateProduct = (name, price, quantity) => {
  const product = findProduct(name);
  if (product) {
    product.price = price;
    product.quantity = quantity;
  }
};

const searchProducts = (searchTerm) => {
  return products.value.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

const sortProductsByName = () => {
  store.dispatch("sortPantryItemsByName");
};

const sortProductsByPriceLowToHigh = () => {
  store.dispatch("sortPantryItemsByPriceLowToHigh");
};

const sortProductsByPriceHighToLow = () => {
  store.dispatch("sortPantryItemsByPriceHighToLow");
};

const sortProductsByQuantity = () => {
  store.dispatch("sortPantryItemsByQuantity");
};
</script>
