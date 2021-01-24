<template>
  <div class="shop-item">
    <div class="item-selector">
      <check-button :is-checked="product.checked" @click.native="checkClick" />
    </div>
    <div class="shop-list-item">
      <div class="item-left">
        <img :src="product.image" alt="" />
      </div>

      <div class="item-right">
        <div class="item-right-title">
          {{ product.title }}
        </div>
        <div class="item-right-desc">
          {{ product.desc }}
        </div>
        <div class="item-right-price">
          <span class="item-price">¥ {{ product.price }} </span>
          <span class="item-count">× {{ product.count }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartListItem",
  components: {
    CheckButton,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
    
  },
  methods: {
      checkClick() {
          this.product.checked = !this.product.checked
        //   console.log(this.product);
      }
  },
};
</script>

<style scoped>
.shop-item {
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
    /* flex: 1; */
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shop-list-item {
  display: flex;
}
.item-left {
  flex: 1;
  width: 80px;
  height: 120px;
  padding: 4px;
}
.item-left img {
  /* width: 100%; */
  height: 100%;
  border-radius: 5%;
}
.item-right {
  margin-left: 6px;
  flex: 1;
  width: 265px;
}
.item-right div {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 8px 0;
}
.item-right-title {
  color: #000;
  font-size: 18px;
}
.item-right-desc {
  font-size: 14px;
}
.item-right-price {
  margin-top: 7px;
  display: flex;
  justify-content: space-between;
}
.item-right-price span {
  flex: 1;
}
.item-price {
  color: orangered;
  font-size: 20px;
}
.item-count {
  text-align: right;
  padding-right: 10px;
  color: #000;
}
</style>
