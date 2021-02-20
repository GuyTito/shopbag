<template>
  <div>
    <form @submit="updateBagItem">
      <input type="text" name="bag_name" id="bag_name" v-model="bag.bag_name" required placeholder="Shopping Name">
      <textarea name="comment" id="comment" cols="70" rows="3" v-model="bag.comment" placeholder="Some notes..." ></textarea>

      <EditItem :items="bag.items" 
        @add-item="addItem" 
        @update-items="updateItems" 
        @remove-item="removeItem"  
      />

      <input type="submit" value="Update Bag" class="btn">
    </form>
  </div>
</template>

<script>
import EditItem from "../components/EditItem";

export default {
  name: 'EditPage',
  components: {EditItem },
  data(){
    return{
        bag: this.$store.getters.getBag(this.$route.params.id)
    }
  },
  methods: {
    updateItems(itemData){
        if (itemData) {
            this.bag.items.forEach((item, index) => {
                if (item.item_id == itemData.item_id) {
                    this.bag.items[index] = itemData
                }
            })
        }
        return false
    },
    addItem(newitem){
        this.bag.items.push(newitem)
    },
    removeItem(itemId){
        this.bag.items = this.bag.items.filter(item => item.item_id !== itemId)
    },
    updateBagItem(){
      const updatedBag = {
        bag_id: this.bag.bag_id,
        bag_name: this.bag.bag_name,
        comment: this.bag.comment,
        items: this.bag.items
      }
      this.$store.dispatch('updateBag', updatedBag)
      this.$router.push(`/bag/${updatedBag.bag_id}`)
    }
  }
    
}
</script>

<style>

</style>