<template>
  <div>
    <form @submit.prevent="updateItems">
      <input
        class="form-control mb-2"
        type="text"
        v-model="item_name"
        name="item_name"
        required
        placeholder="shopping item"
      />
      <input
        class="form-control mb-2"
        type="number"
        min="0.00"
        step="0.01"
        v-model="budget_price"
        name="budget_price"
        placeholder="budget price"
      />
      <input
        class="form-control mb-2"
        type="number"
        min="0.00"
        step="0.01"
        v-model="market_price"
        name="market_price"
        placeholder="market price?"
      />
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
          value="Update Item"
        />
      </div>
    </form>

    <!-- display item after adding -->
    <!-- <div v-for="item in items" :key="item.item_id">
      <span @click="populateIItemFields(item)">{{ item.item_name }} </span>
      <span>{{ item.budget_price }} </span>
      <span>{{ item.market_price }} </span>
      <span>{{ item.quantity }}</span>
      <span>{{ item.bought_price }} </span>
      <button @click="$emit('remove-item', item.item_id)" class="del">x</button>
    </div> -->

    <div v-for="item in items" :key="item.item_id">
    <div class="d-flex justify-content-between">
      <div class="ms-2">
        <h6 @click="populateIItemFields(item)">{{ item.item_name }}</h6>
        <div>
          <span>{{currency}} {{ item.budget_price }} </span>
          <span class="ms-4">{{currency}} {{ item.market_price }} </span>
          <span class="ms-4">{{ item.quantity }}</span>
          <span class="ms-4">{{currency}} {{ item.bought_price }} </span>
        </div>
      </div>

      <div class="mt-2">
        <div @click="$emit('remove-item', item.item_id)" class="bg-secondary rounded-circle p-2">
          <img
            src="@/assets/icons/bin.svg"
            alt="trash"
            height="25"
            width="25"
          />
        </div>
      </div>
    </div>
    
    <hr class="bg-primary" />

  </div>
  </div>
</template>

<script>
export default {
  name: "EdiItem",
  props: ["items", "currency"],
  data() {
    return {
      item_id: null,
      item_name: "",
      budget_price: null,
      market_price: null,
      purchased: null,
      bought_price: null,
      quantity: null,
    };
  },
  methods: {
    resetFields() {
      this.item_id = null;
      this.item_name = "";
      this.budget_price = null;
      this.market_price = null;
      this.purchased = null;
      this.bought_price = null;
      this.quantity = null;
    },
    updateItems() {
      if (this.item_id !== null) {
        const oldItem = {
          item_id: this.item_id,
          item_name: this.item_name,
          budget_price: this.budget_price,
          market_price: this.market_price,
          purchased: this.purchased,
          bought_price: this.bought_price,
          quantity: this.quantity,
        };
        this.$emit("update-items", oldItem);
      } else {
        this.addItem();
      }

      this.resetFields();
    },
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
      this.resetFields();
    },
    populateIItemFields(item) {
      this.item_id = item.item_id;
      this.item_name = item.item_name;
      this.budget_price = item.budget_price;
      this.market_price = item.market_price;
      this.purchased = item.purchased;
      this.bought_price = item.bought_price;
      this.quantity = item.quantity;
    },
  },
};
</script>

<style scoped>
h6{
    cursor: pointer;
}
</style>