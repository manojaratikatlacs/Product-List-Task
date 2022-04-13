<template>
  <div>
    <button @click="showBooks" type="button" class="btn btn-outline-primary">
      Books
    </button>
    <button @click="showPens" type="button" class="btn btn-outline-primary">
      Pens
    </button>
    <button @click="showScales" type="button" class="btn btn-outline-primary">
      Scales
    </button>
    <button
      @click="addShowProducts"
      type="button"
      class="btn btn-outline-primary"
    >
      Add
    </button>
    <div class="form" v-if="isShowAddProducts">
      <form v-on:submit.prevent="addNew(addProductData)">
        <select v-model="selectedProduct">
          <option disabled>--- Select Product ---</option>
          <option>Books</option>
          <option>Pens</option>
          <option>Scales</option>
        </select>
        <br />
        <p v-if="showError">Please select any one option</p>
        <div>
          <label class="label"> Name : </label>
          <input v-model="addProductData.productName" type="text" />
        </div>
        <div>
          <label class="label"> Price : </label>
          <input v-model="addProductData.productPrice" type="text" />
        </div>
        <div>
          <label class="label"> Quantity : </label>
          <input v-model="addProductData.productQty" type="text" />
        </div>
        <button type="submit" class="btn btn-outline-primary">Add</button>
      </form>
    </div>

    <ul v-if="isShowBooks">
      <div v-for="book in books" :key="book.Id">
        <ProductItem
          v-bind:is-show-add-products="isShowAddProducts"
          :productitem="book"
        />
      </div>
    </ul>
    <ul v-if="isShowPens">
      <div v-for="pen in pens" :key="pen.Id">
        <ProductItem
          v-bind:is-show-add-products="isShowAddProducts"
          :productitem="pen"
        />
      </div>
    </ul>
    <ul v-if="isShowScales">
      <div v-for="scale in scales" :key="scale.Id">
        <ProductItem
          v-bind:is-show-add-products="isShowAddProducts"
          :productitem="scale"
        />
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import ProductItem from "./ProductItem.vue";
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";

@Options({
  components: {
    ProductItem,
  },
  computed: mapGetters(["books", "pens", "scales"]),
})
export default class ProductList extends Vue {
  isShowBooks = false;
  isShowPens = false;
  isShowScales = false;
  isShowAddProducts = false;
  addProductData = Object;
  selectedProduct = null;
  showError = false;

  showBooks() {
    this.isShowBooks = true;
    this.isShowPens = false;
    this.isShowScales = false;
    this.isShowAddProducts = false;
  }
  showPens() {
    this.isShowPens = true;
    this.isShowBooks = false;
    this.isShowScales = false;
    this.isShowAddProducts = false;
  }
  showScales() {
    this.isShowPens = false;
    this.isShowBooks = false;
    this.isShowScales = true;
    this.isShowAddProducts = false;
  }
}
</script>

<style>
.form {
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  justify-content: center;
}
button {
  margin: 5px;
}
label {
  text-align: left;
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
input {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}
</style>
