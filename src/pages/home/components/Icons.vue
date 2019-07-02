<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-imgcontent" :src="item.imgUrl" alt />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>

      <!-- <swiper-slide>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-imgcontent"
              src="//imgs.qunarzz.com/vs_ceph_vs_tts/9c4697d2-aa47-4618-8400-8bf4840753c7.jpg_r_480x320x90_358e2fe0.jpg"
              alt
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
      </swiper-slide>-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang='scss' scoped>
.icons /deep/ .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
.icons {
  margin-top: 0.1rem;
}
.icon {
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  .icon-desc {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    color: #333;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0.44rem;
    .icon-imgcontent {
      height: 100%;
      margin: 0 auto;
    }
  }
}
</style>
