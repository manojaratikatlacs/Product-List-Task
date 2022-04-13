/* eslint-disable no-empty */

import { createStore } from "vuex";

export default createStore({
  state: {
    books: [
      {
        Id: 1,
        Name: "Book Name",
        Price: "Book Price",
        Qty: "Book Quantity",
        productName: "Vue Book",
        productPrice: "499",
        productQty: "5",
        productImage:
          "https://3lhowb48prep40031529g5yj-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/logo-vuejs-min.png",
      },
      {
        Id: 2,
        Name: "Book Name",
        Price: "Book Price",
        Qty: "Book Quantity",
        productName: "Marvel",
        productPrice: "999",
        productQty: "1",
        productImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png",
      },
      {
        Id: 3,
        Name: "Book Name",
        Price: "Book Price",
        Qty: "Book Quantity",
        productName: "DC",
        productPrice: "1999",
        productQty: "2",
        productImage:
          "https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg",
      },
    ],
    pens: [
      {
        Id: 1,
        Name: "Pen Name",
        Price: "Pen Price",
        Qty: "Pen Quantity",
        productName: "Montex",
        productPrice: "05",
        productQty: "50",
        productImage:
          "https://penpaperoffice.com/application/assets/2020/02/montex-winner-gel-3-color.jpg",
      },
      {
        Id: 2,
        Name: "Pen Name",
        Price: "Pen Price",
        Qty: "Pen Quantity",
        productName: "Apsara",
        productPrice: "10",
        productQty: "5",
        productImage:
          "https://craftbits.in/wp-content/uploads/2021/07/APS_METLSTAR_PEN_BLU_2.jpg",
      },
      {
        Id: 3,
        Name: "Pen Name",
        Price: "Pen Price",
        Qty: "Pen Quantity",
        productName: "Goldex",
        productPrice: "03",
        productQty: "10",
        productImage:
          "https://m.media-amazon.com/images/I/41exKkHZqiL._AC_SS450_.jpg",
      },
    ],
    scales: [
      {
        Id: 1,
        Name: "Scale Name",
        Price: "Scale Price",
        Qty: "Scale Quantity",
        productName: "Natraj",
        productPrice: "15",
        productQty: "15",
        productImage:
          "https://images-eu.ssl-images-amazon.com/images/I/41brTEqs5kL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
      },
      {
        Id: 2,
        Name: "Scale Name",
        Price: "Scale Price",
        Qty: "Scale Quantity",
        productName: "Apex",
        productPrice: "10",
        productQty: "25",
        productImage:
          "https://m.media-amazon.com/images/I/619hPPgX9pL._SL1500_.jpg",
      },
      {
        Id: 3,
        Name: "Scale Name",
        Price: "Scale Price",
        Qty: "Scale Quantity",
        productName: "Camlin",
        productPrice: "20",
        productQty: "30",
        productImage:
          "https://www.bazaarfresh.in/wp-content/uploads/15cm-CamlinExamScale.jpg",
      },
    ],
  },
  getters: {
    books: (state) => {
      const books = state.books.map((product) => {
        return {
          Id: product.Id,
          Name: product.Name,
          Price: product.Price,
          Qty: product.Qty,
          productName: product.productName,
          productPrice: product.productPrice,
          productQty: product.productQty,
          productImage: product.productImage,
        };
      });
      return books;
    },
    pens(state) {
      const pens = state.pens.map((product) => {
        return {
          Id: product.Id,
          Name: product.Name,
          Price: product.Price,
          Qty: product.Qty,
          productName: product.productName,
          productPrice: product.productPrice,
          productQty: product.productQty,
          productImage: product.productImage,
        };
      });
      return pens;
    },
    scales: (state) => {
      const scales = state.scales.map((product) => {
        return {
          Id: product.Id,
          Name: product.Name,
          Price: product.Price,
          Qty: product.Qty,
          productName: product.productName,
          productPrice: product.productPrice,
          productQty: product.productQty,
          productImage: product.productImage,
        };
      });
      return scales;
    },
  },
  mutations: {
    onSave(payload) {
      for (let i = 0; i <= 3; i++) {
          
      }
    },
  },
  actions: {
    addNew(context) {
      context.commit("addNew");
    },
    onSave(context, payload) {
      context.commit("onSave", payload);
    },
  },
});
