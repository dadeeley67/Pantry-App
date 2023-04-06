<template>
  <div>
    <div>
      <label for="name">Name</label>
      <input name="name" type="text" id="name" v-model="name" />
    </div>

    <div>
      <label for="price">Price</label>
      <input name="price" type="number" id="price" v-model="price" />
    </div>

    <div>
      <label for="quantity">Quantity</label>
      <input name="quantity" type="number" id="quantity" v-model="quantity" />
    </div>
    <button @click="addProduct(name, price, quantity)">Add</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const emit = defineEmits(["close"]);

const name = ref("");
const price = ref(0);
const quantity = ref(0);

const addProduct = (name, price, quantity) => {
  store.dispatch("addPantryItem", { name, price, quantity });
  emit("close");
};
</script>
