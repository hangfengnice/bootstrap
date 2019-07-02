<template>
  <div class=header>
   <div class="header-left">
<div class="iconfont back-icon">&#xe624;</div>
   </div>
   <div class="header-input">
     <i class="iconfont">&#xe632;</i>
     输入城市/景点/游玩主题</div>
   <div class="header-right">{{this.city}}
     <i class="iconfont">&#xe600;</i>
   </div>

  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    city: String
  }

}
</script>

<style lang='scss' scoped>
@import '@/varibles.scss';

.header{
  line-height: .86rem;
  display: flex;
  background-color: $bgcolor;
  color: #fff;
  .header-left{
    width: .64rem;
    float: left;
    .back-icon{
      text-align: center;
      font-size: .4rem;
    }
  }
  .header-input{
    flex:1;
    height: .64rem;
    line-height: .64rem;
    margin-top: .12rem;
    margin-left: .2rem;
    padding-left: .2rem;
    background-color: #fff;
    border-radius: .1rem;
    color: #ccc;
  }
  .header-right{
    width: 1.24rem;
    float: right;
    text-align: center;
  }
}
</style>
