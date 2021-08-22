<template>
  <div>
    <h5>Items</h5>
    <div class="mb-2">
      <small><em>*Tap on an item name to edit</em></small>
    </div>

    <div v-for="item in prop_items" :key="item.item_id">
      <div class="d-flex justify-content-between">
        <div class="ms-2">
          <h6>
            <a  @click="populateIItemFields(item)" class="text-dark text-decoration-none" href="#edit-item">
              {{ item.item_name }}
            </a>
          </h6>
          <div class="text-black-50">
            <span>b: {{currency}}{{ item.budget_price }} </span>
            <span class="ms-4">m: {{currency}}{{ item.market_price }} </span>
            <span class="ms-4">q: {{ item.quantity }}</span>
            <span class="ms-4">ex: {{currency}}{{ item.bought_price }} </span>
          </div>
        </div>

        <div class="mt-3" @click="$emit('remove-item', item.item_id)">
          <img
            src="@/assets/icons/x-circle.svg"
            alt="trash"
          />
        </div>
      </div>
      
      <hr class="bg-primary" />

    </div>

    <h5 class="mt-4" id="edit-item">Update</h5>
    <form @submit.prevent="updateItems">
      <label for="item_name" class="form-label">Shopping item</label>
      <input
        class="form-control mb-2"
        type="text"
        v-model="items.item_name"
        name="item_name"
        required
        placeholder="shopping item"
      />

      <label for="budget_price" class="form-label">Your budget price (b)</label>
      <input
        class="form-control mb-2"
        type="number"
        min="0.00"
        step="0.01"
        v-model="items.budget_price"
        name="budget_price"
        placeholder="budget price"
      />

      <label for="market_price" class="form-label">Market price (m)</label>
      <input
        class="form-control mb-2"
        type="number"
        min="0.00"
        step="0.01"
        v-model="items.market_price"
        name="market_price"
        placeholder="market price?"
      />

      <label for="quantity" class="form-label">Quantity (q)</label>
      <input
        class="form-control mb-2"
        type="number"
        min="1"
        step="1"
        pattern="\d+"
        v-model="items.quantity"
        name="quantity"
        placeholder="quantity"
      />

      <label for="bought_price" class="form-label">Price you bought (ex)</label>
      <input
        class="form-control mb-2"
        type="number"
        min="0.00"
        step="0.01"
        v-model="items.bought_price"
        name="bought_price"
        placeholder="price you bought"
      />

      <div class="d-flex justify-content-center mb-4">
        <input
          class="btn btn-primary mb-2"
          type="submit"
          value="Save Item"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EdiItem",
  props: ["prop_items", "currency"],
  data() {
    return {
      items : {
        item_id: null,
        item_name: null,
        budget_price: null,
        market_price: null,
        purchased: null,
        bought_price: null,
        quantity: 1,
      }
    };
  },
  methods: {
    resetFields() {
      this.items = {}
      this.items.quantity = 1;
    },
    updateItems() {
      if (this.items.item_id !== null) {
        this.$emit("update-items", this.items);
      } else {
        this.addItem();
      }

      this.resetFields();
    },
    addItem() {
      const newItem = {
        item_id: new Date().toISOString(),
        item_name: this.items.item_name,
        budget_price: this.items.budget_price != null ? this.items.budget_price : 0,
        market_price: this.items.market_price != null ? this.items.market_price : 0,
        purchased: false,
        bought_price: this.items.bought_price != null ? this.items.bought_price : 0,
        quantity: this.items.quantity,
      };
      this.$emit("add-item", newItem);
      this.resetFields();
    },
    populateIItemFields(item) {
      this.items = item
    },
  },
};
</script>

<style scoped>
h6{
    cursor: pointer;
}
</style>