<template>
  <div class="container-fluid mt-4 page-head">
    <div class="d-flex justify-content-between mb-2">
      <div class="mx-2">Your Shopping Bags</div>
      <router-link class="mx-3" to="/add">
        <img
          id="dark"
          src="@/assets/icons/add.svg"
          alt="bags"
          height="25"
          width="25"
        />
      </router-link>
    </div>

    <hr style="height: 2px; width: 100%; margin: 0" class="bg-primary" />

    <!-- list of bag links -->
    <BagList :bags="bags" @remove-bag="removeBag" />
  </div>
</template>

<script>
import BagList from "../components/BagList";

export default {
  name: "HomePage",
  components: { BagList },
  computed: {
    bags() {
      return this.$store.getters.getBags;
    },
  },
  methods: {
    removeBag(bagId) {
      this.$store.dispatch("removeBag", bagId);
    },
  },
};
</script>

<style>
</style>