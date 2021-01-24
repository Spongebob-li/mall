<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button 
      :is-checked="isSelectAll" 
      class="check-button" 
      @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="price">合计：{{ totalPrice }}</div>
     <div class="calculate" @click="calcClick">
    去计算 ({{checkLength}})
  </div>
  </div>
 
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

import { mapGetters } from 'vuex'

export default {
  name: "CartBottomBar",
  components: {   
    CheckButton,
  },
  computed: {
   ...mapGetters(['cartList']), //辅助函数,作用是将 store 中的 getter 映射到局部计算属性
  //  计算价格
    totalPrice() {
        // console.log(this);

      return "¥" + parseInt(this.cartList.filter(item => { 
            return item.checked
          }).reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)).toFixed(2)
    },
    // 合计数量
    checkLength() {
      return this.cartList.filter(item => item.checked).length   
      },
      isSelectAll() {
        // 第一种方法
        // 先判断数组中有没有被选中的，如果有，取反为false，再将长度取反，如果有长度，取反为false，则全选按钮不选中
        // 如果长度为0，取反为true，则全选按钮为选中状态
        // return !(this.cartList.filter(item => !item.checked).length)
        // console.log(cartList);

        // 第二种方法 find函数  
        // 查找是否有不选中的，如果有，同样取反
        if(this.cartList.length === 0) return false ; // 判断如果一开始进入页面，数组的长度为0的话，将全选状态变更为false
        return !this.cartList.find(item => !item.checked)
      }
  },
  methods: {
    checkClick() {
      if(this.isSelectAll) { // 全部选中
      this.cartList.forEach(item => item.checked = false)
      }else { // 部分或全部不选中
        this.cartList.forEach(item => item.checked = true)
      }

    },
    calcClick() {
    if(!this.isSelectAll) {
      this.$toast.show('请选择购买的商品',2000)
    }
    }
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  position: relative;
  height: 40px;
  line-height: 40px;
  background-color: #eee;
}
.check-content {
  display: flex;
  align-items: center;
 width: 80px;

}
.check-button {
  width: 22px;
  height: 22px;
  line-height: 20px;
  margin-left: 10px;
  margin-right: 5px;
}
.price {
  margin-left: 40px;
  flex: 1;
}
.calculate {
 width: 90px;
  background-color: orangered;
  color: #fff;
  text-align: center;
 
}
</style>
