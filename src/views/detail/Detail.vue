<template>
  <div id="detail" >
      <detail-nav-bar class="detail-nav"/>
    <!-- <div class="wrapper"> -->
      <scroll class="content"  ref="scroll">
    <detail-swiper :top-images="topImages" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop"/>
    </scroll>
    <!-- </div> -->
    

  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from './childComps/DetailShopInfo'

import Scroll from 'components/common/scroll/Scroll'

import { getDetail, Goods, Shop } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
    };
  },
  created() {
    // 1. 保存传入的iid
    this.iid = this.$route.params.iid;

    // 2. 根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      //2.1 获取顶部的图片轮播数据
      console.log(res);
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;

      // 3 获取商品信息的对象
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 4 获取店铺信息的对象
      this.shop = new Shop(data.shopInfo);
    });
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  /* height: 100vh; */
}

.detail-nav {
  z-index: 10;
  background-color: #fff;
  position: relative;
}
.content {
  /* height: calc(100% - 44px); */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

</style>
