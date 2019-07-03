<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div v-show="keyword" class="search-content" ref="search">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="(item, index) of list"
          :key="index"
          @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有匹配内容</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  methods: {
    ...mapMutations(["changeCity"]),
    handleCityClick(city) {
      // this.$store.commit("changeCity", city);
      this.changeCity(city);
      this.$router.push("/");
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  }
};
</script>

<style lang='scss' scoped>
.search {
  touch-action: none;
  height: 0.72rem;
  padding: 0 0.1rem;
  background-color: #00bcd4;
  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    padding: 0 0.1rem;
    border-radius: 0.06rem;
    color: #666;
  }
}
.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background-color: #fff;
    color: #666;
  }
}
</style>
