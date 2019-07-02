<template>
  <div class="header">
    城市选择
    <router-link to="/" class="iconfont header-back">&#xe624;</router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang='scss' scoped>
.header {
  overflow: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  background-color: #00bcd4;
  font-size: 0.32rem;
  position: relative;
  .header-back {
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
  }
}
</style>
