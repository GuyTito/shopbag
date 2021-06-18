<template>
  <!-- display item after adding -->
  <div v-for="item in items" :key="item.item_id">
    <div class="d-flex justify-content-between">
      <div class="ms-2">
        <div>{{ item.item_name }}</div>
        <Item />
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
</template>

<script>
import Item from "../components/Item";

export default {
  components: { Item },
  props: ["items", "currency"],
  emits: ["remove-item"],
};
</script>

<style>
</style>