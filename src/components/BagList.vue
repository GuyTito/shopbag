<template>
  <div class="v-center">
    <!-- list of bags -->
    <div v-for="bag in bags" :key="bag.bag_id">
      <div class="p-2 d-flex justify-content-between">
        <div class="text-dark ovdden w-100">
          <BagListItem :bag="bag" />
        </div>

        <div class="mt-2" @click="$emit('remove-bag', bag.bag_id)">
          <img
            src="@/assets/icons/x-circle.svg"
            alt="trash"
          />
        </div>
      </div>

      <hr class="bg-primary" />
    </div>
  </div>
</template>

<script>
import BagListItem from "../components/BagListItem.vue";

export default {
  name: "BagList",
  components: { BagListItem },
  props: ["bags"],
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}

a:hover, a:focus {
  text-decoration: none;
}

.ovdden{
    height: 60px;
    overflow: hidden;
}


</style>