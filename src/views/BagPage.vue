<template>
  <!-- list of items -->
  <div class="container-fluid mt-4 page-head">
    <div class="d-flex justify-content-between mb-2">
      <h2 class="mx-2">{{ bag.bag_name }}</h2>
      <router-link :to="`/edit/${bag.bag_id}`" class="mx-3">
        <img
          src="@/assets/icons/pencil.svg"
          alt="edit"
          height="25"
          width="25"
        />
      </router-link>
    </div>

    <hr class="bg-primary" />

    <div class="v-center  p-2">
      <div v-for="item in bag.items" :key="item.item_id">
        <Item :item="item" @del-item="removeItem" />
        <hr class="bg-primary" />
      </div>
      <div class="mt-4">
        <h6>Notes</h6>
        {{ bag.comment }}
      </div>
    </div>
  </div>
</template>

<script>
// import ShoppingItems from "../components/ShoppingItems";
// import AddItem from "../components/AddItem";
import Item from "../components/Item";
import Subheading from "../components/Subheading.vue";

export default {
  name: "BagPage",
  components: { Item, Subheading },
  data() {
    return {
      bagId: this.$route.params.id,
    };
  },
  computed: {
    bag() {
      return this.$store.getters.getBag(this.bagId);
    },
  },
  methods: {
    removeItem(itemId) {
      this.$store.dispatch("removeItem", {
        bagId: this.bagId,
        itemId: itemId,
      });
    },
  },
};
</script>

<style scoped>
</style>