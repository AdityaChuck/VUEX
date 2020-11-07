<template>
  <div class="container mt-5">
    <ProductListOne :products="products" />
      <br/>
    <ProductListTwo :products="products" />
  </div>
</template>

<script>
import ProductListOne from "./components/ProductListOne";
import ProductListTwo from "./components/ProductListTwo";

export default {
  name: "App",
  components: {
    ProductListOne,
    ProductListTwo,
  },
  data: () => ({
    
  }),
};
</script>



