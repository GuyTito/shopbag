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

    <div class="v-center p-2">
      <div v-for="item in bag.items" :key="item.item_id">
        <Item :item="item" :currency="bag.currency" @del-item="removeItem" />
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

export default {
  name: "BagPage",
  components: { Item },
  data(){
    return {
      bag: this.getbag()
    }
  },
  created() {
    this.$store.dispatch('getBags');
    
  },
  methods: {
    getbag() {
      // return this.$store.getters.getBag(this.$route.params.id);
      const bags = this.$store.getters.getBags
      this.bag = bags.filter(bag => bag.bag_id == this.$route.params.id)[0]
    },
    async removeItem(itemId) {
      await this.$store.dispatch("removeItem", {
        bagId: this.bag.bag_id,
        itemId: itemId,
      });
      this.$store.dispatch('getBags');
    }
  },
};
</script>

<style scoped>
</style>