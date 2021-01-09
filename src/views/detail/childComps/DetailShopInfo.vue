<template>
  <div class="shop-info">
      <div class="shop-log">
          <img :src="shop.logo" alt="" class="shop-log-img">
          <span>{{shop.name}} </span>
      </div>
      <div class="shop-middle">
          <div class="shop-middle-item  shop-middle-left" >
              <div class="info-sells">
                  <div class="sells-count">
                      {{shop.sells }}
                  </div>
                <div class="sells-text">总销量</div>
              </div>
              <div class="info-goods">
                  <div class="goods-count">
                      {{shop.goodsCount}}
                  </div>
                  <div class="goods-text">全部宝贝</div>
              </div>
             
          </div>
          <div class="shop-middle-item shop-middle-right">
              <table>
                  <tr v-for="(item,index) in shop.score " :key="index">
                      <td>{{item.name}} </td>
                      <td class="score"  :class="{'score-better': item.isBetter}" >{{item.score}} </td>
                      <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高': '低'}}</span> </td>
                  </tr>
              </table>
          </div>
      </div>
      <div class="shop-bottom">
          <div class="enter-shop">进店逛逛</div>
      </div>



  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
/* .shop-info {

} */
.shop-log {
    border-top: 4px solid #EEE ;
    padding: 20px 8px;
}
.shop-log img{
    width: 50px;
    height: 50px;
    margin-right: 14px;

}
.shop-log-img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle
}
.shop-middle {
    /* margin-top: 15px; */
    display: flex;
    align-items: center;

}
.shop-middle-item {
    flex: 1;
}
.shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    font-size: 13px;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
}
.sells-count,
.goods-count {
    padding: 10px 0;
    font-size: 16px;
    font-weight: 700;
    color: #333;
}
.shop-middle-right table{
    width: 120px;
    margin-left: 30px;
}
.shop-middle-right table td {
    padding: 5px 0;
    font-size: 13px;
    color: #333;
}
.shop-middle-right
.score {
    color:#5ea732;
}
.shop-middle-right
.score-better {
    color: #f13e3a;
}
.shop-middle-right
.better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
}
.shop-middle-right
.better-more span {
    background-color: #f13e3a;
}
.enter-shop {
    text-align: center;
    line-height: 34px;
    width: 120px;
    background-color: #eee;
  border-radius: 5px;
  color: #f13e3a;
  margin: 0 auto;
  /* font-size: 14px; */
}

</style>
