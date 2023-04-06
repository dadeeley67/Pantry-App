import { createApp } from "vue";
import { createStore } from "vuex";
import "./assets/main.css";

import App from "./App.vue";

const store = createStore({
  state() {
    return {
      pantry: [
        { id: "1", name: "Milk", quantity: 1, price: 1.99 },
        { id: "2", name: "Eggs", quantity: 12, price: 2.99 },
        { id: "3", name: "Bread", quantity: 2, price: 3.99 },
      ],
      recipes: [
        {
          id: "1",
          name: "Pancakes",
          ingredients: [
            { id: "1", name: "Milk", quantity: 1 },
            { id: "2", name: "Eggs", quantity: 2 },
            { id: "3", name: "Bread", quantity: 1 },
          ],
        },
        {
          id: "2",
          name: "Omelette",
          ingredients: [
            { id: "1", name: "Milk", quantity: 1 },
            { id: "2", name: "Eggs", quantity: 2 },
          ],
        },
        {
          id: "3",
          name: "French Toast",
          ingredients: [
            { id: "1", name: "Milk", quantity: 1 },
            { id: "2", name: "Eggs", quantity: 2 },
            { id: "3", name: "Bread", quantity: 2 },
          ],
        },
      ],
    };
  },
  mutations: {
    ADD_PANTRY_ITEM(state, payload) {
      state.pantry.push(payload);
    },
    REMOVE_PANTRY_ITEM(state, payload) {
      state.pantry = state.pantry.filter((item) => item.id !== payload);
    },
    UPDATE_PANTRY_ITEM(state, payload) {
      const item = state.pantry.find((item) => item.id === payload.id);
      item.quantity = payload.quantity;
    },
    SORT_PANTRY_BY_NAME(state) {
      state.pantry.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    },
    SORT_PANTRY_BY_QUANTITY(state) {
      state.pantry.sort((a, b) => {
        if (a.quantity < b.quantity) {
          return -1;
        }
        if (a.quantity > b.quantity) {
          return 1;
        }
        return 0;
      });
    },
    SORT_PANTRY_BY_PRICE_LOW_TO_HIGH(state) {
      state.pantry.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
    },
    SORT_PANTRY_BY_PRICE_HIGH_TO_LOW(state) {
      state.pantry.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        }
        if (a.price < b.price) {
          return 1;
        }
        return 0;
      });
    },
    ADD_RECIPE(state, payload) {
      state.recipes.push(payload);
    },
    REMOVE_RECIPE(state, payload) {
      state.recipes = state.recipes.filter((item) => item.id !== payload);
    },
    UPDATE_RECIPE(state, payload) {
      const item = state.recipes.find((item) => item.id === payload.id);
      item.name = payload.name;
      item.ingredients = payload.ingredients;
    },
  },
  actions: {
    addPantryItem(context, payload) {
      context.commit("ADD_PANTRY_ITEM", payload);
    },
    removePantryItem(context, payload) {
      context.commit("REMOVE_PANTRY_ITEM", payload);
    },
    updatePantryItem(context, payload) {
      context.commit("UPDATE_PANTRY_ITEM", payload);
    },
    sortPantryItemsByName(context) {
      context.commit("SORT_PANTRY_BY_NAME");
    },
    sortPantryItemsByQuantity(context) {
      context.commit("SORT_PANTRY_BY_QUANTITY");
    },
    sortPantryItemsByPriceLowToHigh(context) {
      context.commit("SORT_PANTRY_BY_PRICE_LOW_TO_HIGH");
    },
    sortPantryItemsByPriceHighToLow(context) {
      context.commit("SORT_PANTRY_BY_PRICE_HIGH_TO_LOW");
    },
    addRecipe(context, payload) {
      context.commit("ADD_RECIPE", payload);
    },
    removeRecipe(context, payload) {
      context.commit("REMOVE_RECIPE", payload);
    },
    updateRecipe(context, payload) {
      context.commit("UPDATE_RECIPE", payload);
    },
  },
  getters: {
    pantry(state) {
      return state.pantry;
    },
    recipes(state) {
      return state.recipes;
    },
    getPantryItemByID: (state) => (id) => {
      return state.pantry.find((item) => item.id === id);
    },
    getRecipeByID: (state) => (id) => {
      return state.recipes.find((item) => item.id === id);
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
