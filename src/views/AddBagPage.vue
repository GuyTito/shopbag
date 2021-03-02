<template>
  <div>
    <p>Create bag and items to buy</p>
    <form @submit="addBagItem" class="form-login">
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
      <AddItem @add-item="addItem" />
      <DisplayItems :items="items" @remove-item="removeItem" />
      <div class="d-grid">
        <input type="submit" value="Add Bag" class="btn btn-primary" />
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
        items: this.items,
      };
      this.$store.dispatch("addBag", newBag);
      this.$router.push(`/`);
    },
    removeItem(itemId) {
      this.items = this.items.filter((item) => item.item_id !== itemId);
    },
  },
};
</script>

<style>
</style>