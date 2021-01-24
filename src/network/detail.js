import { request } from './request'
export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid,
        }
    })
}

/// 推荐数据
export function getRecommend() {
    return request({
        url: '/recommend'
    })
}

//  商品标题  价格 销量 三包信息提取
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.price = itemInfo.price
        this.nwePrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.lowNowPrice = itemInfo.lowNowPrice
        this.discountDesc = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.services = services
    }
}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo  // 店铺图标  // 店鋪
        this.name = shopInfo.name // 店鋪名称   
        this.fans = shopInfo.cFans  // 粉絲，关注量
        this.sells = shopInfo.cSells // 銷量
        this.score = shopInfo.score  // 店鋪評分
        this.goodsCount = shopInfo.cGoods  // 商品
    }
}

export class GoodsParam {
    constructor (info,rule) {
        // 注： images可能没有值，（有些商品有值，有些商品没有）
        this.image = info.images ? info.images[0] : '';
        this.set = info.set
        this.size = rule.tables
    }
}

