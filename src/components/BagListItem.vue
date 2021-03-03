<template>
  <router-link :to="`/bag/${bag.bag_id}`">
    <h4>{{ bag.bag_name }}</h4>
    <div>
      <span class="text-black-50 w-100" v-for="item in bag.items" :key="item.item_id">
        {{ item.item_name }}...
      </span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["bag"],
};
</script>

<style scoped>
</style>