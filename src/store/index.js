import { createStore } from 'vuex'

// import idb from '@/api/idb.js';

export default createStore({
  state: {
    bags: []
  },
  mutations: {
    // ADD_BAG(state, newBag){
      // let bagData = {
      //   bag_id: newBag.bag_id,
      //   bag_name: newBag.bag_name,
      //   comment: newBag.comment,
      //   items: newBag.items,
      //   currency: newBag.currency
      // }

      // state.bags.unshift(newBag)
      // state.bags = newBag
    // },
    // REMOVE_ITEM(state, IDs){
    //   state.bags.forEach((bag) => {
    //     if (bag.bag_id == IDs.bagId) {
    //       bag.items = bag.items.filter(item => item.item_id !== IDs.itemId)
    //     }
    //   })
    // },
    // REMOVE_BAG(state, bagId){
    //   state.bags = state.bags.filter(bag => bag.bag_id !== bagId)
    // },
    // UPDATE_BAG(state, updatedBag){
    //   state.bags.forEach(bag => {
    //     if (bag.bag_id == updatedBag.bag_id) {
    //       this.bag = updatedBag
    //     }
    //   })
    // }
  },
  actions: {
    // async getBags(context) {
    //   context.state.bags = await idb.getBags()
    // },
    // addBag(context, newBag){
    //   context.commit("ADD_BAG", newBag)
    // },
    // async addBag(context, bag) {
    //   await idb.addBag(bag);
    // },
    // removeItem(context, IDs){
    //   context.commit("REMOVE_ITEM", IDs)
    // },
    // async removeItem(context, IDs){
    //   // context.commit("REMOVE_ITEM", IDs)
    //   await idb.removeItem(IDs)
    // },
    // removeBag(context, bagId){
    //   context.commit("REMOVE_BAG", bagId)
    // },
    // async removeBag(context, bagId) {
    //   await idb.removeBag(bagId); 
    // },
    // updateBag(context, updatedBag){
    //   context.commit("UPDATE_BAG", updatedBag)
    // },
    // async updateBag(context, bag) {
    //   await idb.updateBag(bag);
    // }
  },
  getters:{
    // getBags(state){
    //   return state.bags
    // },
    // getBag: (state) => (bagId) => {
    //   // return state.bags.filter(bag => bag.bag_id == bagId)[0]
    //   return state.bags.find(bag => bag.bag_id == bagId)
    // },
  }
})
