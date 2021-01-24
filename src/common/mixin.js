import { debounce } from "common/utils";

import BackTop from "components/content/backTop/BackTop";


export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null,
        }
    }, 
    mounted() {
        // 防抖
        const refresh = debounce(this.$refs.scroll.refresh, 50);

        // 对监听的事件进行保存
        this.itemImgListener = () => {
            refresh();
        }
        // 1. 监听item中图片加载完成
        this.$bus.$on("itemImageLoad", this.itemImgListener);
        // console.log('我是混入的内容');

    },
}

export const backTopMixin = {
    components: {
        BackTop,
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0, 300);
        }
    }

}

