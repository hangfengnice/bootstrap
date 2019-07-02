<template>
  <div>
    <div class="recommend-title">

      热销推荐
    </div>
    <ul>
      <li class='item border-bottom' v-for='item of recommendList' :key='item.id'>

          <img class='item-img' :src="item.imgUrl" alt="">

        <div class='item-info'>
          <p class='item-title'>{{item.title}} </p>
          <p class='item-desc'>{{item.desc}} </p>
          <button class='item-button'>查看详情</button>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
name: "HomeRecommend",
data(){
  return {
    recommendList: [
      {
        id: "001",
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
        title: "大连圣亚海洋世界(AAAA景区)",
        desc:"成人三馆联票 - 某一连锁店销售"
      },
      {
        id: "002",
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
        title: "大连圣亚海洋世界(AAAA景区)",
        desc:"成人三馆联票 - 某一连锁店销售"
      },
    ]
  }
}
}
</script>

<style lang='scss' scoped>
.recommend-title{
  line-height: .8rem;
  text-indent: .2rem;
  background-color: #eee;
  margin-top: .2rem;
}
.item{
display: flex;
overflow: hidden;
height: 1.9rem;

  .item-img{
    width: 1.7rem;
    height: 1.7rem;
    padding: .1rem;
  }
  .item-info{
    flex: 1;
    padding: .1rem;
    min-width: 0;
    .item-title{
      line-height: .54rem;
      font-size: .32rem;

    }
    .item-desc{
      line-height: .4rem;
      color: #ccc;
    }
    .item-button{
      line-height: .44rem;
      margin-top: .16rem;
      background-color: #ff9300;
      padding: 0 .2rem;
      border-radius: .06rem;
      color: #fff;
    }
  }
}

</style>
