<template>
  <div>
    <form @submit="addBagItem">
      <input type="text" name="bag_name" id="bag_name" v-model="bag_name" placeholder="Shopping Name">
      <textarea name="comment" id="comment" cols="70" rows="3" v-model="comment" placeholder="Some notes..."></textarea>
      <AddItem @add-item="addItem" />

      <!-- display item after adding -->
      <div v-for="item in items" :key="item.name">
        <span>{{item.item_name}} </span>
        <span>{{item.budget_price}} </span>
        <span>{{item.market_price}} </span>
        <span>{{item.bought_price}} </span>
        <span>{{item.quantity}}</span>
      </div>

      <input type="submit" value="Add Bag" class="btn">
    </form>
  </div>
</template>

<script>
import AddItem from "../components/AddItem";

export default {
  name: 'AddBag',
  components: {AddItem },
  data(){
    return{
      bag_name:'',
      comment:'',
      items:[]
    }
  },
  methods: {
    addItem(newItem){
      this.items.push(newItem)
    },
    addBagItem(){
      const newBag = {
        bag_name: this.bag_name,
        comment: this.comment,
        items: this.items
      }
      // this.$emit("add-bag", newBag)
      this.$store.dispatch('addBag', newBag)
      this.$router.push(`/`)

      // this.bag_name = ''
      // this.comment =''
    }
  }
    
}
</script>

<style>

</style>