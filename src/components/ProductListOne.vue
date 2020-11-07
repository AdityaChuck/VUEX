<template>
  <div>
    <table class="table table-striped table-bordered text-center">
      <thead class="bg-dark text-light">
        <th>Item</th>
        <th>Price</th>
      </thead>
      <tbody v-for="product in saleProducts" :key="product.price">
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
      </tbody>
    </table>
    <button  @click="reducePrice(4)" class="btn btn-outline-dark btn-block">Reduce Price</button>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
  name: "ProductListOne",
  computed: {
    products() {
      return this.$store.state.products;
    },
    // saleProducts() {
    //   return this.$store.getters.saleProducts
    // },
    ...mapGetters([
      'saleProducts',
    ])
  },
  methods:{
    // reducePrice(amount) {
    //   this.$store.dispatch("reducePrice",amount)
    // }
    ...mapActions([
      `reducePrice`
    ])
  }
};
</script>
