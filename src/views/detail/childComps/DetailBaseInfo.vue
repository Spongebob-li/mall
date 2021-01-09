<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
      <div class="info-title">{{goods.title}} </div>
      <div class="info-price">
          <span class="n-price">{{goods.lowNowPrice}} </span>
          <span class="o-price">{{goods.oldPrice}} </span>
          <span class="discountDesc" v-if="goods.discountDesc">{{goods.discountDesc}} </span>
      </div>
      <div class="info-other">
          <span>{{goods.columns[0]}} </span>
          <span>{{goods.columns[1]}} </span>
          <span>{{goods.columns[2]}} </span>
      </div>
      <div class="info-service">
          <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
              <img :src="goods.services[index-1].icon" alt="">
              <span>{{goods.services[index-1].name}} </span>
          </span>
      </div>

  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px soild #f2f5f8;
}
.info-title {
    /* font-size: 14px; */
    color: #222;
}
.info-price {
    margin-top: 10px;
}
.n-price {
    color: var(--color-high-text);
    font-size: 24px;
    /* font:normal normal 700 24px/30px Arial, serif; */
}
.o-price {
    text-decoration:line-through;
    font-size: 12px;
    margin-left: 5px;
    color: #ccc;
}
.info-other {
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    line-height: 50px;
}
.discountDesc {
    width: 100px;
    background-color: #ff5777;
    color: #fff; 
    font-size: 10px;
    border-radius: 12px;
    padding: 5px;
    margin-left: 10px;
}
.info-service {
    display: flex;
    white-space: nowrap;
    border-top: 2px solid #eee;
    padding: 16px 0;
    
}
.info-service-item {
    flex: 1;
}
.info-service img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
 
}
.info-service span {
    font-size: 8px;
    color: #333;
}

</style>
