<template>
  <div>
    <span>1111</span>
    <!-- <p v-for="datum of data" :key="datum.SiteName">{{ datum.SiteName }}</p> -->
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "Page1",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    document.title = "Page1"
    
    // Test for API
    const cors = 'https://cors-anywhere.herokuapp.com/';
    let api = "https://data.epa.gov.tw/api/v1/aqx_p_432?format=xml&limit=50&api_key=f8146cb1-193c-4a9a-812a-9c84c9ef87b9&filters=County,EQ,%E8%87%BA%E5%8D%97%E5%B8%82";
    Vue.axios.get(`${cors}${url}`).then((response) => {
      //response is an JSON object
      // console.log(Array.isArray(response.data));
      // this.data = response.data;
      console.log(response);
    });
  },
};
</script>