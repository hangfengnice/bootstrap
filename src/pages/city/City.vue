<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList
    :letter='letter'
     :cities="cities" :hot="hotCities"></CityList>
    <CityAlphabet
    @change='handleLetterChange'
     :cities='cities'
    ></CityAlphabet>
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
import axios from "axios";

export default {
  name: "city",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  methods: {
    // getCityInfo(){
    //   axios.get('/api/mock/city.json')
    //   .then(this.handleGetCityInfoSucc)
    // },
    // handleGetCityInfoSucc(res){
    //   console.log(res)
    // }
    getCityInfo() {
      axios.get("/api/mock/city.json").then(res => {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.cities = data.cities;
          this.hotCities = data.hotCities;
        }
      });
    },
    handleLetterChange(letter){
      this.letter = letter
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>

<style lang='scss' scoped>
</style>
