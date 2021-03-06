<template>
  <div class="container-fluid my-4 page-head">
    <p>Create bag and items to buy</p>
    <form @submit="addBagItem" class="v-center">
      <input
        type="text"
        name="bag_name"
        id="bag_name"
        class="form-control mb-2"
        v-model="bag_name"
        required
        placeholder="Name your shopping"
      />
      <textarea
        name="comment"
        id="comment"
        class="form-control mb-2"
        cols="70"
        rows="3"
        v-model="comment"
        placeholder="Some notes..."
      ></textarea>

      <div class="mb-2 form-control">
        <span class="me-3">Select preferred currency:</span>
        <br>
        <input class="me-1" type="radio" id="cedi" value="₵" v-model="currency" required />
        <label class="me-3" for="cedi">₵</label>

        <input class="me-1" type="radio" id="dollar" value="$" v-model="currency" required />
        <label class="me-3" for="dollar">$</label>
        
        <input class="me-1" type="radio" id="naira" value="₦" v-model="currency" required />
        <label class="me-3" for="naira">₦</label>
      </div>

      <AddItem @add-item="addItem" />
      <DisplayItems :items="items" :currency="currency" @remove-item="removeItem" />

      <div class="d-grid">
        <input type="submit" value="Create Bag" class="btn btn-primary" />
      </div>
    </form>
  </div>
</template>

<script>
import AddItem from "../components/AddItem";
import DisplayItems from "../components/DisplayItems";

export default {
  name: "AddBagPage",
  components: { AddItem, DisplayItems },
  data() {
    return {
      bag_name: "",
      comment: "",
      items: [],
      currency: "₵"
    };
  },
  methods: {
    addItem(newItem) {
      this.items.push(newItem);
    },
    addBagItem() {
      const newBag = {
        bag_id: new Date().toISOString(),
        bag_name: this.bag_name,
        comment: this.comment,
        currency: this.currency,
        items: this.items,
      };
      this.$store.dispatch("addBag", newBag);
      this.$router.push(`/bags`);
    },
    removeItem(itemId) {
      this.items = this.items.filter((item) => item.item_id !== itemId);
    },
  },
};
</script>

<style>
</style>