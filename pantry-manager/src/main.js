import { createApp } from "vue";
import { createStore } from "vuex";
import "./assets/main.css";

import App from "./App.vue";

const store = createStore({
  state() {
    return {
      pantry: [
        {
          id: "1",
          name: "Milk",
          quantity: 1,
          price: 1.99,
          category: "dairy",
          unit: "litre",
          expiry: "2021-12-31",
          location: "fridge",
          notes: "2% fat",
        },
        {
          id: "2",
          name: "Eggs",
          quantity: 12,
          price: 2.99,
          category: "dairy",
          unit: "dozen",
          expiry: "2021-12-31",
          location: "fridge",
          notes: "free range",
        },
        {
          id: "3",
          name: "Bread",
          quantity: 2,
          price: 3.99,
          category: "bread",
          unit: "loaf",
          expiry: "2021-12-31",
          location: "pantry",
          notes: "wholemeal",
        },
        {
          id: "4",
          name: "Butter",
          quantity: 1,
          price: 4.99,
          category: "dairy",
          unit: "stick",
          expiry: "2021-12-31",
          location: "fridge",
          notes: "unsalted",
        },
        {
          id: "5",
          name: "Cheese",
          quantity: 1,
          price: 5.99,
          category: "dairy",
          unit: "block",
          expiry: "2021-12-31",
          location: "fridge",
          notes: "cheddar",
        },
        {
          id: "6",
          name: "Ham",
          quantity: 1,
          price: 6.99,
          category: "meat",
          unit: "pack",
          expiry: "2021-12-31",
          location: "fridge",
          notes: "smoked",
        },
        {
          id: "7",
          name: "Chicken",
          quantity: 1,
          price: 7.99,
          category: "meat",
          unit: "pack",
          expiry: "2021-12-31",
          location: "fridge",
          notes: "frozen",
        },
        {
          id: "8",
          name: "Beef",
          quantity: 1,
          price: 8.99,
          category: "meat",
          unit: "pack",
          expiry: "2021-12-31",
          location: "fridge",
          notes: "frozen",
        },
        {
          id: "9",
          name: "Pork",
          quantity: 1,
          price: 9.99,
          category: "meat",
          unit: "pack",
          expiry: "2021-12-31",
          location: "fridge",
          notes: "frozen",
        },
        {
          id: "10",
          name: "Lamb",
          quantity: 1,
          price: 10.99,
          category: "meat",
          unit: "pack",
          expiry: "2021-12-31",
          location: "fridge",
          notes: "frozen",
        },
        {
          id: "11",
          name: "Fish",
          quantity: 1,
          price: 11.99,
          category: "meat",
          unit: "pack",
          expiry: "2021-12-31",
          location: "fridge",
          notes: "frozen",
        },
        {
          id: "12",
          name: "Rice",
          quantity: 1,
          price: 12.99,
          category: "grains",
          unit: "bag",
          expiry: "2021-12-31",
          location: "pantry",
          notes: "brown",
        },
        {
          id: "13",
          name: "Pasta",
          quantity: 1,
          price: 13.99,
          category: "grains",
          unit: "bag",
          expiry: "2021-12-31",
          location: "pantry",
          notes: "wholemeal",
        },
        {
          id: "14",
          name: "Potatoes",
          quantity: 1,
          price: 14.99,
          category: "vegetables",
          unit: "bag",
          expiry: "2021-12-31",
          location: "pantry",
          notes: "frozen",
        },
        {
          id: "15",
          name: "Tomatoes",
          quantity: 1,
          price: 15.99,
          category: "vegetables",
          unit: "bag",
          expiry: "2021-12-31",
          location: "pantry",
          notes: "frozen",
        },
        {
          id: "16",
          name: "Onions",
          quantity: 1,
          price: 16.99,
          category: "vegetables",
          unit: "bag",
          expiry: "2021-12-31",
          location: "pantry",
          notes: "frozen",
        },
        {
          id: "17",
          name: "Garlic",
          quantity: 1,
          price: 17.99,
          category: "vegetables",
          unit: "bag",
          expiry: "2021-12-31",
          location: "pantry",
          notes: "frozen",
        },
        {
          id: "18",
          name: "Carrots",
          quantity: 1,
          price: 18.99,
          category: "vegetables",
          unit: "bag",
          expiry: "2021-12-31",
          location: "pantry",
          notes: "frozen",
        },
        {
          id: "19",
          name: "Broccoli",
          quantity: 1,
          price: 19.99,
          category: "vegetables",
          unit: "bag",
          expiry: "2021-12-31",
          location: "pantry",
          notes: "frozen",
        },
        {
          id: "20",
          name: "Spinach",
          quantity: 1,
          price: 20.99,
          category: "vegetables",
          unit: "bag",
          expiry: "2021-12-31",
          location: "pantry",
          notes: "frozen",
        },
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
        {
          id: "4",
          name: "Scrambled Eggs",
          ingredients: [
            { id: "1", name: "Milk", quantity: 1 },
            { id: "2", name: "Eggs", quantity: 2 },
          ],
        },
        {
          id: "5",
          name: "Bacon and Eggs",
          ingredients: [
            { id: "1", name: "Milk", quantity: 1 },
            { id: "2", name: "Eggs", quantity: 2 },
            { id: "6", name: "Ham", quantity: 2 },
          ],
        },
        {
          id: "6",
          name: "Chicken and Rice",
          ingredients: [
            { id: "7", name: "Chicken", quantity: 1 },
            { id: "12", name: "Rice", quantity: 1 },
          ],
        },
        {
          id: "7",
          name: "Beef and Rice",
          ingredients: [
            { id: "8", name: "Beef", quantity: 1 },
            { id: "12", name: "Rice", quantity: 1 },
          ],
        },
        {
          id: "8",
          name: "Pork and Rice",
          ingredients: [
            { id: "9", name: "Pork", quantity: 1 },
            { id: "12", name: "Rice", quantity: 1 },
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
      item.name = payload.name;
      item.price = payload.price;
      item.category = payload.category;
      item.unit = payload.unit;
      item.expiry = payload.expiry;
      item.location = payload.location;
      item.notes = payload.notes;
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
