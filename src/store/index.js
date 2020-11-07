import { createStore } from 'vuex'

export default createStore({
  state: {
    strict:true,
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shells", price: 80 },
    ],
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price = Number(product.price) - payload
      })
    }
  },
  actions: {
    reducePrice: (context, payload) =>{
      context.commit("reducePrice", payload)
    }
  },
  modules: {
  },
  getters:{
    saleProducts: state => {
      let saleProducts = state.products.map((product) => ({
        name: `** ${product.name} **`,
        price: product.price / 2,
      }));
      return saleProducts
    }
  }
})
