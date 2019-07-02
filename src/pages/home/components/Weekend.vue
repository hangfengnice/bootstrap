<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data() {
    return {
      recommendList: [
        {
          id: "001",
          imgUrl:
            "https://imgs.qunarzz.com/p/tts9/1803/c5/9eed406a7bc0f402.jpg_r_390x260x90_e8778af1.jpg",
          title: "大连圣亚海洋世界(AAAA景区)",
          desc: "成人三馆联票 - 某一连锁店销售"
        },
        {
          id: "002",
          imgUrl:
            "https://imgs.qunarzz.com/p/tts9/1803/c5/9eed406a7bc0f402.jpg_r_390x260x90_e8778af1.jpg",
          title: "大连圣亚海洋世界(AAAA景区)",
          desc: "成人三馆联票 - 某一连锁店销售"
        }
      ]
    };
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
.item-wrapper {

  height: 0;
  padding-bottom: 33%;
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
