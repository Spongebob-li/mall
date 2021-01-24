module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px-to-viewport": {
            viewportWidth:375, // 视口宽度 对应设计稿的宽度
            unitPrecision: 5, // 指定 ‘px’ 转换为视窗单位值的小数位数（很多时候无法整除，所以需要保留多位小数）
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，一建议使用 ‘vm’
            selectorBlackList: [ 'ignore','tab-bar','tab-bar-item'],// 指定需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位
            minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: false, // 媒体查询里的单位是否需要转换单位
        }
    }
}