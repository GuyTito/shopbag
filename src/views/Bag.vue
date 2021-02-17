<template>
<!-- list of items -->
  <div>
    <h2> {{bag.bag_name}} </h2>
    <!-- <AddItem @add-item="addItem" /> -->
    <div v-for="item in bag.items" :key="item.id">
      <Item :item="item" />
    </div>
    <p> {{bag.comment}} </p>
  </div>
</template>

<script>
// import ShoppingItems from "../components/ShoppingItems";
// import AddItem from "../components/AddItem";
import Item from "../components/Item";


export default {
  name: 'Bag',
  components: {Item },
  data(){
    return {
      bagId: this.$route.params.id
    }
  },
  computed: {
    bag(){
      return this.$store.getters.getBag(this.bagId)
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>

</style>