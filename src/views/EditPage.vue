<template>
  <div class="container-fluid my-4 page-head">
    <h4>Update bag and items</h4>
    <form class="v-center mt-3">
      <input
        class="form-control mb-2"
        type="text"
        name="bag_name"
        id="bag_name"
        v-model="bag.bag_name"
        required
        placeholder="Shopping Name"
      />
      <textarea
        class="form-control mb-2"
        name="comment"
        id="comment"
        cols="70"
        rows="3"
        v-model="bag.comment"
        placeholder="Some notes..."
      ></textarea>

      <div class="mb-2 form-control">
        <span class="me-3">Select preferred currency:</span>
        <br>
        <input class="me-1" type="radio" id="cedi" value="₵" v-model="bag.currency" required />
        <label class="me-3" for="cedi">₵</label>

        <input class="me-1" type="radio" id="dollar" value="$" v-model="bag.currency" required />
        <label class="me-3" for="dollar">$</label>
        
        <input class="me-1" type="radio" id="naira" value="₦" v-model="bag.currency" required />
        <label class="me-3" for="naira">₦</label>
      </div>

      <EditItem
        :items="bag.items"
        :currency="bag.currency"
        @add-item="addItem"
        @update-items="updateItems"
        @remove-item="removeItem"
      />

      <div class="d-grid">
        <input type="button" @click="updateBagItem" value="Update Bag" class="btn btn-primary" />
      </div>    
    </form>
  </div>
</template>

<script>
import EditItem from "../components/EditItem";

export default {
  name: "EditPage",
  components: { EditItem },
  // data() {
  //   return {
  //     bag: this.$store.getters.getBag(this.$route.params.id),
  //   };
  // },
  computed: {
    bag() {
      // return this.$store.getters.getBag(this.$route.params.id);
      let bags = this.$store.getters.getBags
      return bags.filter(bag => bag.bag_id == this.$route.params.id)[0]
    },
  },
  created() {
    this.$store.dispatch('getBags');
  },
  methods: {
    updateItems(itemData) {
      if (itemData) {
        this.bag.items.forEach((item, index) => {
          if (item.item_id == itemData.item_id) {
            this.bag.items[index] = itemData;
          }
        });
      }
      return false;
    },
    addItem(newitem) {
      this.bag.items.push(newitem);
    },
    removeItem(itemId) {
      this.bag.items = this.bag.items.filter((item) => item.item_id !== itemId);
    },
    async updateBagItem() {
      await this.$store.dispatch("updateBag", this.bag);
      this.$router.replace(`/bag/${this.bag.bag_id}`);
    },
  },
};
</script>

<style>
</style>