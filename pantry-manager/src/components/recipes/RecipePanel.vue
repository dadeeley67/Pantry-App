<template>
  <div>
    <div
      class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
    >
      <div>
        <div class="text-xl font-medium text-black">{{ recipe.name }}</div>
        <ul v-for="ingredient in recipe.ingredients" :key="ingredient">
          <li class="text-slate-500">
            {{ ingredient.name }} : {{ ingredient.quantity }}
          </li>
        </ul>
      </div>
    </div>
    <div class="flex mx-auto my-4">
      <button
        class="p-2 max-w-sm mx-auto bg-slate-500 rounded-md shadow-lg border-2 border-black"
        @click="$emit('removeRecipe', recipe.id)"
      >
        Remove
      </button>
      <button
        class="p-2 max-w-sm mx-auto bg-slate-500 rounded-md shadow-lg border-2 border-black"
        @click="$emit('updateRecipe', recipe.id, ingredients)"
      >
        Update
      </button>
    </div>
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
