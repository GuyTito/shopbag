<template>
  <!-- display item after adding -->
  <div v-for="item in items" :key="item.item_id">
    <div class="d-flex justify-content-between">
      <div class="ms-2">
        <div>{{ item.item_name }}</div>
        <div class="text-black-50">
          <span>b: {{currency}}{{ item.budget_price }} </span>
          <span class="ms-4">m: {{currency}} {{ item.market_price }} </span>
          <span class="ms-4">q: {{ item.quantity }}</span>
          <span class="ms-4">ex: {{currency}}{{ item.bought_price }} </span>
        </div>
      </div>

      <div class="mt-2" @click="$emit('remove-item', item.item_id)">
        <img
          src="@/assets/icons/x-circle.svg"
          alt="trash"
        />
      </div>
    </div>
    
    <hr class="bg-primary" />

  </div>
</template>

<script>
export default {
  props: ["items", "currency"],
  emits: ["remove-item"],
};
</script>

<style>
</style>