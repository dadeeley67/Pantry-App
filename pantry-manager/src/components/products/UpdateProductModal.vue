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

    <div>
      <label for="category">Category</label>
      <input name="category" type="text" id="category" v-model="category" />
    </div>

    <div>
      <label for="unit">Unit</label>
      <input name="unit" type="text" id="unit" v-model="unit" />
    </div>

    <div>
      <label for="expiry">Expiration Date</label>
      <input name="expiry" type="date" id="expiry" v-model="expiry" />
    </div>

    <div>
      <label for="location">Location</label>
      <input name="location" type="text" id="location" v-model="location" />
    </div>

    <div>
      <label for="notes">Notes</label>
      <input name="notes" type="text" id="notes" v-model="notes" />
    </div>

    <button @click="updateProduct(name, price, quantity)">Update</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const emit = defineEmits(["close"]);

const props = defineProps({
  product: Object,
});

const name = ref(props.product.name);
const price = ref(props.product.price);
const quantity = ref(props.product.quantity);
const category = ref(props.product.category);
const unit = ref(props.product.unit);
const expiry = ref(props.product.expiry);
const location = ref(props.product.location);
const notes = ref(props.product.notes);

const updateProduct = (name, price, quantity) => {
  store.dispatch("updatePantryItem", {
    id: props.product.id,
    name,
    price,
    quantity,
    category,
    unit,
    expiry,
    location,
    notes,
  });
  emit("close");
};
</script>
