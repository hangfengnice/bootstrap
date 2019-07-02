<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for='item in swiperList' :key='item.id'>
        <img
          class="swiper-img"
          :src="item.imgUrl"
          alt
        />
      </swiper-slide>
      

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {
          id:'001',
          imgUrl: "https://imgs.qunarzz.com/p/tts3/1806/c7/264a320e9e8c3c02.jpg_r_390x260x90_4e3ba596.jpg"
        },
        {
          id:'002',
          imgUrl: "https://imgs.qunarzz.com/p/tts3/1806/c7/264a320e9e8c3c02.jpg_r_390x260x90_4e3ba596.jpg"
        }

      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.wrapper /deep/ .swiper-pagination-bullet-active{
  background-color: #fff ;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 66%;
  .swiper-img {
    width: 100%;
  }
}
</style>
