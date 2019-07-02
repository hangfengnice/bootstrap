<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-wrapper">
          <img class="item-img" :src="item.imgUrl" alt />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
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
    return {
    
    };
  }
};
</script>

<style lang='scss' scoped>
.recommend-title {
  line-height: 0.8rem;
  text-indent: 0.2rem;
  background-color: #eee;

}
.item-wrapper {

  height: 0;
  padding-bottom: 38%;
  overflow: hidden;

  .item-img {

    width: 100%;
  }
}
.item-info {
  padding: 0.1rem;
  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
  }
  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
  }
}
</style>
