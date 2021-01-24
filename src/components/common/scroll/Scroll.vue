<template>
 <div class="wrapper" ref="wrapper">
   <div class="content">
     <slot></slot>
   </div>
 </div>
</template>

<script>
import BScroll from 'better-scroll'

 export default {
    name:"Scroll",
    props: {
      probeType: {
        type:Number,
        default:0
      },
      pullUpLoad:{
         type:Boolean,
        default:false
      }
    },
    data() {
      return {
        scroll:null,
      }
    },
    mounted() {
      // 创建 BScroll 对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
      })
      // 监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3 ) {
       this.scroll.on('scroll',(position) => {
        // console.log(position);
        this.$emit('scroll',position)
      } )
    }
      // 監聽scroll 滾動到底部
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
      
    },
    methods: {
      // 将 scroll 方法进行封装，便于调用时不需要在调用的组件里面写太多的逻辑代码
      scrollTo(x,y, time = 300) {
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
    refresh() { 
      this.scroll && this.scroll.refresh()
    },
    finishPullUp() { // 上拉加载多次方法封装
        this.scroll && this.scroll.finishPullUp()
      
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
    },
    
   
 }
</script>

<style scoped>

 
</style>
