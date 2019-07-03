<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe632;</i>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.city}}
        <i class="iconfont">&#xe600;</i>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Header",
  computed: {
    ...mapState(['city'])
  }
};
</script>

<style lang='scss' scoped>
@import "@/varibles.scss";

.header {
  line-height: 0.86rem;
  display: flex;
  background-color: $bgcolor;
  color: #fff;
  .header-left {
    width: 0.64rem;
    float: left;
    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }
  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background-color: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }
  .header-right {
    min-width: 1.04rem;
    padding: 0 .1rem;
    float: right;
    text-align: center;
    color: #fff;
  }
}
</style>
