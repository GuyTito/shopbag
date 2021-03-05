<template>
  <div class="d-flex justify-content-between">
    <div>
      <input
        type="checkbox"
        @change="markPurchased"
        class="float-start mt-3 form-check"
      />
      <div class="float-start mx-4">
        <div :class="{ 'is-purchased': item.purchased }">
          <h5>{{ item.item_name }}</h5>
        </div>
        <div class="text-black-50">
          <span>₵{{ item.budget_price }} </span>
          <span class="ms-4">₵{{ item.market_price }} </span>
          <span class="ms-4">{{ item.quantity }}</span>
          <span class="ms-4">₵{{ item.bought_price }} </span>
        </div>
      </div>
    </div>

    <div class="mt-2">
      <div @click="$emit('del-item', item.item_id)" class="bg-secondary rounded-circle p-2" >
        <img src="@/assets/icons/bin.svg" alt="trash" height="25" width="25" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["item"],
  methods: {
    markPurchased() {
      this.item.purchased = !this.item.purchased;
    },
  },
};
</script>

<style scoped>
.is-purchased {
  text-decoration: line-through;
}

/* @media (prefers-color-scheme: dark) {
        .item {
            color: #eee;
            background: #121212;
        }
    } */
</style>