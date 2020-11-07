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
  </div>
</template>

<script>
export default {
  name: "ProductListTwo",
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProducts() {
      return this.$store.getters.saleProducts
    },
  },
};
</script>

