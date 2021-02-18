<template>
<!-- list of items -->
  <div>
    <h2> {{bag.bag_name}} </h2>
    <router-link :to="`/edit/${bag.bag_id}`">Edit</router-link>

    <div v-for="item in bag.items" :key="item.item_id">
      <Item :item="item" @del-item="removeItem" />
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
    removeItem(itemId) {
      this.$store.dispatch('removeItem', {
        bagId: this.bagId,
        itemId: itemId
      })
    }
  }
}
</script>

<style scoped>

</style>