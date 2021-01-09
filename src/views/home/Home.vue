<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
        class="tab-control"
        v-show="isTabFixed"
      />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- :probe-type="3" 如果不加冒号的话 会迷人解析为字符串，加：后，会根据类型来解析 -->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <!-- .native 监听组件的原生点击事件 -->
  </div>
</template>



<script>
import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView";
import FeatureView from "./childComponents/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goos/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        // 用于保存数据展示分页、加载更多与切换不同选项卡下展示不同数据
        pop: { page: 0, list: [] }, // page 页码；  list 数据条数。
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: true,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
    console.log(this.saveY)
  },
  created() {
    // 不建议created里面放置过多的数据代码，最好只放置主要逻辑，
    // 所以将请求再封装一层到 methods中
    // 1. 请求多个数据
    this.getHomeMultidata();
    // 2. 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {

    const refresh = debounce(this.$refs.scroll.refresh, 50);
    // 1. 监听item中图片加载完成
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    // 点击事件监听相关的方法
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index  

    },
    // 点击回到顶部的监听事件
    backClick() {
      console.log("backClick");
      // 通过 this.$refs.scroll，拿到组件scroll里面的scroll属性，调用scroll里面的方法scrollTo(0,0)
      // scrollTo(0,0,500) 第三个参数可以让返回顶部有个时间过渡效果
      //  this.$refs.scroll.scroll.scrollTo(0,0,500)    这是没有封装前的使用方法
      this.$refs.scroll.scrollTo(0, 0); // 调用 scroll 组件内封装好的 scrollto 方法
    },
    // 监听回到顶部按钮的显示与隐藏距离
    contentScroll(position) {
      // (-position.y) 前面加负号将position.y转为正值
      this.isShowBackTop = -position.y > 1000;
      // 2. 判斷決定tabcontrol是否吸頂（改變樣式）
  this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {  //  獲取tabcontrol的offsetTop值
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
},
    // 网络请求相关的方法
    getHomeMultidata() {
      // 请求多个数据  1.轮播图与4个圆圈小图的数据
      getHomeMultidata().then((res) => {
        //  console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      // 将每次请求的 page 的页码 +1
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list); // 数组的解构赋值 ； 将list里面的商品数组添加到一个新的数组中，存放每次页面刷新加载更多时的数据
        this.goods[type].page += 1;
        // 完成上拉加載更多
        this.$refs.scroll.finishPullUp();
      });
    },
    
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.tab-control {
  position: relative;
  z-index: 9;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 14px;
  /* 在使用瀏覽器原生滾動時。為了讓導航不跟隨一起滾動 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99; */
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
