<template>
  <div>
    <form @submit.prevent="addItem">
      <label for="item_name" class="form-label">Shopping item</label>
      <input
        class="form-control mb-2"
        type="text"
        v-model="item_name"
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
        v-model="budget_price"
        name="budget_price"
        placeholder="budget price"
      />
      
      <label for="market_price" class="form-label">Market price (m)</label>
      <input
        class="form-control mb-2"
        type="number"
        min="0.00"
        step="0.01"
        v-model="market_price"
        name="market_price"
        placeholder="market price"
      />
      
      <label for="quantity" class="form-label">Quantity (q)</label>
      <input
        class="form-control mb-2"
        type="number"
        min="0"
        step="1"
        pattern="\d+"
        v-model="quantity"
        name="quantity"
        placeholder="quantity"
      />
      
      <label for="bought_price" class="form-label">Price you bought (ex)</label>
      <input
        class="form-control mb-2"
        type="number"
        min="0.00"
        step="0.01"
        v-model="bought_price"
        name="bought_price"
        placeholder="price you  bought"
      />

      <div class="d-flex justify-content-center mb-2">
        <input
          class="btn btn-primary mb-2"
          type="submit"
          value="Add Item"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddItem",
  data() {
    return {
      item_name: "",
      budget_price: null,
      market_price: null,
      bought_price: null,
      quantity: null,
    };
  },
  methods: {
    addItem() {
      const newItem = {
        item_id: new Date().toISOString(),
        item_name: this.item_name,
        budget_price: this.budget_price != null ? this.budget_price : 0,
        market_price: this.market_price != null ? this.market_price : 0,
        purchased: false,
        bought_price: this.bought_price != null ? this.bought_price : 0,
        quantity: this.quantity != null ? this.quantity : 0,
      };
      this.$emit("add-item", newItem);

      this.item_name = "";
      this.budget_price = null;
      this.market_price = null;
      this.bought_price = null;
      this.quantity = null;
    },
  },
};
</script>

<style scoped>
</style>