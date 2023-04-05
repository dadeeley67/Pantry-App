<template>
  <div>
    <h2>Recipes</h2>
    <button @click="sortRecipesByName">Sort by name</button>
    <button @click="sortRecipesByIngredients">Sort by ingredients</button>
    <button @click="toggleAddRecipeModal">Add Recipe</button>

    <AddRecipeModal v-if="showAddRecipeModal" @close="toggleAddRecipeModal" />

    <ul v-if="recipes.length > 0">
      <li v-for="recipe in recipes" :key="recipe.name">
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

const toggleAddRecipeModal = () => {
  showAddRecipeModal.value = !showAddRecipeModal.value;
};

const removeRecipe = (id) => {
  console.log("removeRecipe", id);
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
</script>
