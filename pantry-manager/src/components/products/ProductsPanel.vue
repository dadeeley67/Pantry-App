<template>
  <div>
    <h2>Products</h2>
    <button @click="sortProductsByName">Sort by Name</button>
    <button @click="sortProductsByPriceLowToHigh">
      Sort by Price (Low to High)
    </button>
    <button @click="sortProductsByPriceHighToLow">
      Sort by Price (High to Low)
    </button>
    <button @click="sortProductsByQuantity">Sort by Quantity</button>

    <button @click="toggleAddProductModal">Add Product</button>

    <AddProductModal
      v-if="showAddProductModal"
      @close="toggleAddProductModal"
    />

    <ul v-if="products.length > 0">
      <li v-for="product in products" :key="product.name">
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
