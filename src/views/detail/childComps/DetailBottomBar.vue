<template>
 <div class="bottom-bar">
   <div class="bar-item bar-left">
        <div>
        <i class="icon service"></i>
        <span class="text"> 客服</span>
        </div>
    <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
        </div>
         <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
        </div>
   </div>

    <div class="bar-item bar-right">
     <div class="cart" @click="addToCart">加入购物车</div>
     <div class="buy">购买</div>
 </div>
 </div>

</template>

<script>
 export default {
     name:"DetailBottomBar",
   methods: {
       addToCart() {
          this.$emit('addToCart')
       }
   },
 }
</script>

<style scoped>
.bottom-bar {
    height: 49px;
    /* line-height: 49px; */
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    text-align: center
}

.bar-item {
    flex: 1;
    display: flex;
}

.bar-left>div {
    flex: 1;
}
.text {
    font-size: 13px;
    margin: auto auto;
}
.icon {
    display:block;
    width: 22px;
    height: 22px;
    margin: 5px auto 2px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;

}
.service {
    background-position:0 -53px ;
}
.shop {
    background-position: 0 -98px;
}

.bar-right {
    display: flex;
    font-size: 15px;
    color: #fff;
    line-height: 49px;
}
.bar-right div {
    flex: 1;
}
.bar-right,
.cart {
    background-color: rgb(244, 208, 0);
}
.bar-right
.buy {
    background-color: #D24D57;
}
</style>
