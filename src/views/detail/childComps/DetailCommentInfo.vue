<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-headder">
      <div class="hadder-title">用户评价</div>
      <div class="headder-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }} </span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ commentInfo.created | showDate}}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="info-imgs">
        <img
          :src="item"
          v-for="(item, index) in commentInfo.images"
          :key="index"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils';

export default {
  name: "DetailCommentInfo",
  props: {
    type: Object,
    commentInfo: {
      default() {
        return {};
      },
    },
  },
  filters: { // 时间戳
      showDate(value) {
        //   1. 将时间戳转化为date对象
          const date = new Date(value * 1000)

        //   2. 将date进行时间格式化
    return formatDate(date,'yyyy-MM-dd')
      }
  }
};
</script>

<style scoped>
.info-headder {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.hadder-title {
  /* margin-left: 10px; */
  font-size: 15px;
}
.hadder-more {
  /* margin-right: 10px; */
  font-size: 13px;
}
.info-user {
  padding: 10px 0 5px;
}
.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.info-user span {
  position: relative;
  top: 10px;
  margin-left: 10px;
  font-size: 15px;
}
.info-detail {
  padding: 0 5px 15px;
}
.info-detail p {
  font-size: 12px;
  color: #777;
  line-height: 1.5;
}
.info-detail,
.info-other {
  color: #999;
  font-size: 12px;
  margin-top: 10px;
}
.info-other,
.date {
  margin-right: 8px;
}
.info-imgs {
  margin-top: 10px;
}
.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>
