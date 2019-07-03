<template>
  <div>
    <div class="banner" @click="handleGallaryClick">
      <img
        class="banner-img"
        :src="bannerImg"
        alt
      />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <i class="iconfont">&#xe686;</i>{{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <CommonGallary @close="handleGallaryClose" :imgs="gallaryImgs" v-show="showGallary"></CommonGallary>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  components: {
    CommonGallary
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data() {
    return {
      showGallary: false
    };
  },
  methods: {
    handleGallaryClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  }
};
</script>

<style lang='scss' scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }
    .banner-number {
      margin-top: 0.14rem;

      padding: 0 0.4rem;
      height: 0.32rem;
      line-height: 0.4rem;
      border-radius: 0.2rem;
      background-color: rgba(0, 0, 0, 0.8);
      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
