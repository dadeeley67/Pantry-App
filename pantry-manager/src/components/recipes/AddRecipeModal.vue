<template>
  <div>
    <div>
      <label for="name">Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label for="ingredients">Ingredients</label>
      <input type="text" v-model="ingredients" />
    </div>

    <button @click="addRecipe(name, ingredients)">Add</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const emit = defineEmits(["close"]);

const name = ref("");
const ingredients = ref("");

const addRecipe = (name, ingredients) => {
  store.dispatch("addRecipe", { name, ingredients });
  emit("close");
};
</script>
