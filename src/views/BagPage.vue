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
        <div><strong>Total Budget: </strong>{{ bag.currency }}{{total_budget}}</div>
        <div><strong>Total Expense: </strong>{{ bag.currency }}{{total_expense}}</div>
        <div>
          <strong>Balance: </strong> 
          <span :class="[balance < 0 ? 'text-danger' : '']"> 
            {{ bag.currency }}{{balance}}
          </span>
        </div>
      </div>

      <div>
        <h6>Notes</h6>
        {{ bag.comment }}
      </div>
    </div>

    <router-link class="fab shadow bg-light" :to="`/edit/${bag.bag_id}`">
      <img
        src="@/assets/icons/pencil.svg"
        alt="edit"
        height="25"
        width="25"
        class="mt-3"
      />
    </router-link>
  </div>
</template>

<script>
import idb from '@/api/idb.js';
import Item from "../components/Item";

export default {
  name: "BagPage",
  components: { Item },
  data(){
    return{
      total_budget: 0,
      total_expense: 0,
      balance: 0,
      bag: {},
    }
  },
  methods: {
    async removeItem(itemId) {
      this.bag.items = this.bag.items.filter(item => item.item_id !== itemId)
      this.calcExpenses(this.bag.items)

      let IDs = {
        bagId: this.bag.bag_id,
        itemId: itemId,
      };
      await idb.removeItem(IDs)
    },
    calcExpenses(items){
      let total_budget = items.reduce(function(sum, item) { 
        return sum + (parseInt(item.budget_price) * parseInt(item.quantity));
      }, 0)
      this.total_budget = total_budget

      let total_expense = items.reduce(function(sum, item) { 
        return sum + (parseInt(item.bought_price) * parseInt(item.quantity));
      }, 0)
      this.total_expense = total_expense

      this.balance = total_budget - total_expense
    }
  },
  mounted() {
    idb.getBag(this.$route.params.id)
      .then((response) => {
        this.bag = response;
        this.calcExpenses(response.items)
      })
  }
};
</script>

<style scoped>
</style>