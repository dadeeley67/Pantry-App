<template>
  <div class="m-8">
    <h2 class="font-bold text-4xl mb-4">Recipes</h2>
    <div class="flex mx-auto my-4">
      <button
        @click="sortRecipesByName"
        class="p-2 max-w-sm mx-auto bg-slate-500 rounded-md shadow-lg border-2 border-black"
      >
        Sort by name
      </button>
      <button
        @click="sortRecipesByIngredients"
        class="p-2 max-w-sm mx-auto bg-slate-500 rounded-md shadow-lg border-2 border-black"
      >
        Sort by ingredients
      </button>
      <button
        @click="toggleAddRecipeModal"
        class="p-2 max-w-sm mx-auto bg-slate-500 rounded-md shadow-lg border-2 border-black"
      >
        Add Recipe
      </button>
    </div>

    <AddRecipeModal v-if="showAddRecipeModal" @close="toggleAddRecipeModal" />

    <ul v-if="recipes.length > 0">
      <!-- Filter recipes by search term -->
      <label>Search Recipes</label>
      <input v-model="searchTerm" />

      <li v-for="recipe in searchRecipes(searchTerm)" :key="recipe.name">
        <RecipePanel
          :recipe="recipe"
          @removeRecipe="removeRecipe"
          @updateRecipe="updateRecipe"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import RecipePanel from "./RecipePanel.vue";
import AddRecipeModal from "./AddRecipeModal.vue";

const store = useStore();

const recipes = computed(() => store.state.recipes);

const showAddRecipeModal = ref(false);

const searchTerm = ref("");

const toggleAddRecipeModal = () => {
  showAddRecipeModal.value = !showAddRecipeModal.value;
};

const removeRecipe = (id) => {
  store.dispatch("removeRecipe", id);
};

const findRecipe = (name) => {
  return recipes.value.find((recipe) => recipe.name === name);
};

const updateRecipe = (name, ingredients) => {
  const recipe = findRecipe(name);
  if (recipe) {
    recipe.ingredients = ingredients;
  }
};

const sortRecipesByName = () => {
  recipes.value.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  });
};

const sortRecipesByIngredients = () => {
  recipes.value.sort((a, b) => {
    if (a.ingredients.length > b.ingredients.length) {
      return 1;
    } else if (a.ingredients.length < b.ingredients.length) {
      return -1;
    } else {
      return 0;
    }
  });
};

const searchRecipes = (searchTerm) => {
  return recipes.value.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
};
</script>
