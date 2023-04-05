<template>
  <div>
    <span>{{ recipe.name }}</span>
    <ul v-for="ingredient in recipe.ingredients" :key="ingredient">
      <li>{{ ingredient.name }} : {{ ingredient.quantity }}</li>
    </ul>
    <button @click="$emit('removeRecipe', recipe.id)">Remove</button>
    <button @click="$emit('updateRecipe', recipe.id, ingredients)">
      Update
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});

let recipe = ref(props.recipe);
</script>
