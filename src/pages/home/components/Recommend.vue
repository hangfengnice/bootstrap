<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link tag='li' to="/detail" class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt />

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  },
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.recommend-title {
  line-height: 0.8rem;
  text-indent: 0.2rem;
  background-color: #eee;
  margin-top: 0.2rem;
}
.item {
  display: flex;
  overflow: hidden;
  height: 1.9rem;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
    }
    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
    }
    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background-color: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>
