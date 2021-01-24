<template>
 <div class="toast" v-show="isShow">
     <div>{{message}}</div>
 </div>
</template>

<script>
 export default {
   name:"Toast",
   props: {
    //    message: {
    //        type:String,
    //        default:''
    //    },
    //    show: {
    //        type: Boolean,
    //        default: false,
    //    }
   },
   data() {
       return {
           message:'',
           isShow: false,
       }
   },
   methods: {
       show(message,duration=1500) {  // 给 duration(持续时间) 一个默认值，在使用的时候就可以选中不传这个时间参数，默认1.5秒
            this.isShow = true ;
           this.message = message ;

            setTimeout(() => {
                this.isShow = false ;
                this.message = ''
            },duration)   
        }
   },
 }
</script>

<style scoped>
.toast {
    z-index: 99;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 10px;
    color: #fff;
    background-color: rgba(0,0,0,.6);
}
 
</style>
