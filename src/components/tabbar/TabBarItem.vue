
 <template>
  <div id="tab-bar-item" @click="itemClick">
    <!-- 图片动态化槽 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <!-- 高亮图标 -->
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- 文字动态化插槽 -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>

  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#fe2323",
    },
  },

  data() {
    return {
      
    };
  },
  methods: {
    itemClick() {
      //  console.log('itemClick');
      this.$router.replace(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path)!== -1;
    },
    activeStyle() {
      return this.isActive ? { color:this.activeColor } : {};

    },
  },
};
</script>

<style scoped>
#tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}

#tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
}
</style>

