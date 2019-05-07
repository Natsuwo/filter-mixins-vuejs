<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
      <h3>Filter Products List Component</h3>
      <button class="btn btn-block btn-danger" @click="products.push('Mixins')">Add New Item</button>
      <input type="text" class="form-control mb-md-3 mt-md-3" v-model="filterProduct">
      <div class="card">
        <div class="card-body">
          <ul>
            <li v-for="product in filteredProducts" :key="product">{{ product }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productMixin } from './productMixin';

export default {
  mixins: [productMixin]
};
</script>

<style>
</style>
