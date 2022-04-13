<template>
  <div>
    <div v-if="editProId === productitem.Id">
      <form v-on:submit="onSave(productitem)">
        <img :src="proItems.productImage" />
        <h3>{{ proItems.Name }} : {{ proItems.productName }}</h3>
        <p>
          {{ proItems.Price }} :
          <input v-model="proItems.productPrice" type="text" />
        </p>
        <p>
          {{ proItems.Qty }} :
          <input v-model="proItems.productQty" type="text" />
        </p>
        <button class="btn btn-outline-primary" type="submit">Save</button>
      </form>
    </div>

    <div class="cards" v-else>
      <img :src="productitem.productImage" />
      <h3>
        {{ productitem.Id }}<span>.</span> {{ productitem.Name }} :
        {{ productitem.productName }}
      </h3>
      <p>{{ productitem.Price }} : {{ productitem.productPrice }}</p>
      <p>{{ productitem.Qty }} : {{ productitem.productQty }}</p>
      <button class="btn btn-outline-primary" @click="onEdit(productitem.Id)">
        Edit
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions } from "vuex";

@Options({
  props: {
    productitem: Object,
  },
  methods: mapActions(["onSave"]),
})
export default class ProductItem extends Vue {
  productitem: unknown;
  get props() {
      let proItems = this.productitem
    return proItems
  }
  //proItems = this.productitem;
  editProId = null;
  addProductsData = Array;
  editProductData = { type: Array };
  isAddNewProduct = false;

  onEdit(Id: null) {
    this.editProId = Id;
  }
}
</script>

<style scoped>
.card {
  max-width: 30%;
}
img {
  width: 25%;
}
ul {
  display: block;
}
button {
  padding: 5px;
}
</style>
