<template>
  <!-- list of items -->
  <div class="container-fluid mt-4 mb-4 page-head" v-if="bag">
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

      <div class="mt-4 mb-4">
        <h6>Notes</h6>
        {{ bag.comment }}
      </div>

      <div>
        <div><strong>Total Budget: </strong>{{ bag.currency }}{{total_budget}}</div>
        <div><strong>Total Expense: </strong>{{ bag.currency }}{{total_expense}}</div>
        <div>
          <strong>Balance: </strong> 
          <span :class="[balance < 0 ? 'text-danger' : '']"> 
            {{ bag.currency }}{{balance}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "../components/Item";

export default {
  name: "BagPage",
  components: { Item },
  data(){
    return{
      total_budget: 0,
      total_expense: 0,
      balance: 0
    }
  },
  computed: {
    bag() {
      let bag = this.$store.getters.getBag(this.$route.params.id)
      let items = bag.items
      
      let total_budget = items.reduce(function(sum, item) { 
        return sum + (parseInt(item.budget_price) * parseInt(item.quantity));
      }, 0)
      this.total_budget = total_budget

      let total_expense = items.reduce(function(sum, item) { 
        return sum + (parseInt(item.bought_price) * parseInt(item.quantity));
      }, 0)
      this.total_expense = total_expense

      this.balance = total_budget - total_expense

      return bag;
    },
  },
  created() {
    this.$store.dispatch('getBags');
  },
  methods: {
    async removeItem(itemId) {
      await this.$store.dispatch("removeItem", {
        bagId: this.bag.bag_id,
        itemId: itemId,
      });
    },
  },
};
</script>

<style scoped>
</style>