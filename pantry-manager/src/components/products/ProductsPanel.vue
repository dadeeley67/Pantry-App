<template>
  <div class="m-8">
    <h2 class="font-bold text-4xl mb-4">Products</h2>

    <div class="flex mx-auto my-4">
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

    <!-- Filter products by search term -->
    <div class="relative mb-3 xl:w-96">
      <input
        type="text"
        class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
        id="search"
        name="search"
        placeholder="Search"
        v-model="searchTerm"
      />
      <label
        for="search"
        class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
        >Search Products</label
      >
    </div>

    <!-- <li v-for="product in searchProducts(searchTerm)" :key="product.name">
        <ProductPanel
          :product="product"
          @removeProduct="removeProduct"
          @updateProduct="updateProduct"
        />
      </li> -->
    <!-- </ul> -->
    <table class="min-w-full text-left text-sm font-light border">
      <thead class="border-b font-medium dark:border-neutral-500">
        <tr>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Price</th>
          <th class="px-4 py-2">Quantity</th>
          <th class="px-4 py-2">Category</th>
          <th class="px-4 py-2">Unit</th>
          <th class="px-4 py-2">Location</th>
          <th class="px-4 py-2">Expiration Date</th>
          <th class="px-4 py-2">Notes</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in searchProducts(searchTerm)"
          :key="product.name"
          class="border-b dark:border-neutral-500"
        >
          <ProductPanel :product="product" />
        </tr>
      </tbody>
    </table>
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
