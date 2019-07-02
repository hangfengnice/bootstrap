<template>
  <div class="icons">
    <swiper ref="mySwiper">
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
  data() {
    return {
      iconList: [
        {
          id: "001",
          imgUrl:
            "https://imgs.qunarzz.com/p/p64/1809/46/ddb72937ac938a02.jpg_256x160_5f99ddba.jpg",
          desc: "西安"
        },
        {
          id: "002",
          imgUrl:
            "https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg",
          desc: "丽江"
        },
        {
          id: "003",
          imgUrl:
            "https://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg",
          desc: "泰国"
        },
        {
          id: "004",
          imgUrl:
            "https://imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg",
          desc: "三亚"
        },
        {
          id: "005",
          imgUrl:
            "https://imgs.qunarzz.com/p/p64/1809/46/ddb72937ac938a02.jpg_256x160_5f99ddba.jpg",
          desc: "西安"
        },
        {
          id: "006",
          imgUrl:
            "https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg",
          desc: "丽江"
        },
        {
          id: "007",
          imgUrl:
            "https://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg",
          desc: "泰国"
        },
        {
          id: "008",
          imgUrl:
            "https://imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg",
          desc: "三亚"
        },
        {
          id: "009",
          imgUrl:
            "https://imgs.qunarzz.com/p/p19/1809/b9/2a3d362aabcbb02.jpg_256x160_28907832.jpg",
          desc: "重庆"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
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
