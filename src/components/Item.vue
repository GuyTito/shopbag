<template>
  <div class="d-flex justify-content-between">
    <div class="w-100">
      <input
        type="checkbox"
        @change="markPurchased"
        class="float-start mt-3 form-check"
      />
      <div class="float-start" style="margin-left:15px;">
        <div>
          <h5 :class="{ 'is-purchased': item.purchased }">{{ item.item_name }}</h5>
        </div>
        <div class="text-black-50">
          <span>b: {{currency}}{{ item.budget_price }} </span>
          <span class="ms-3">m: {{currency}} {{ item.market_price }} </span>
          <span class="ms-3">q: {{ item.quantity }}</span>
          <span class="ms-3">ex: {{currency}}{{ item.bought_price }} </span>
        </div>
      </div>
    </div>

    <div @click="$emit('del-item', item.item_id)" class="mt-3">
      <img
        src="@/assets/icons/x-circle.svg"
        alt="trash"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["item", "currency"],
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