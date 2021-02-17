import { createStore } from 'vuex'

export default createStore({
  state: {
    bags: [
      {
        id: 1,
        bag_name: 'Football kit',
        items: [
          {
            id:1,
            item_name: 'boots',
            budget_price: 120.50,
            market_price: 0.00,
            purchased: false,
            bought_price: 0.00,
            quantity: 0

          },
          {
            id:2,
            item_name: 'football socks',
            budget_price: 10.00,
            market_price: 15.05,
            purchased: true,
            bought_price: 10.45,
            quantity: 2

          },
        ],
        comment: 'A pair of boots is one quantity. Same for socks and shin guard.'
      },
      {
        id: 2,
        bag_name: 'general shopping',
        items: [
          {
            id:1,
            item_name: 'detergent',
            budget_price: 10.00,
            market_price: 15.00,
            purchased: true,
            bought_price: 10.00,
            quantity: 2
          },
          {
            id:2,
            item_name: 'tomatoes',
            budget_price: 30.00,
            market_price: 25.00,
            purchased: true,
            bought_price: 25.00,
            quantity: 1
          },
        ],
        comment: '15 tomatoes is one  quantity which costs 25 cedis'
      }
    ]
  },
  mutations: {
    ADD_BAG(state, newBag){
      let bagData = {
        id: new Date().toISOString(),
        bag_name: newBag.bag_name,
        comment: newBag.comment,
        items: newBag.items
      }

      state.bags.unshift(bagData)
    }
  },
  actions: {
    addBag(context, newBag){
      context.commit("ADD_BAG", newBag)
    }
  },
  getters:{
    getBags(state){
      return state.bags
    },
    getBag: (state) => (bagId) => {
      return state.bags.filter(bag => bag.id == bagId)[0]
    }
  },
  modules: {
  }
})
